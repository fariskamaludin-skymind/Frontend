import {
    BboxMetadata,
    Boundingbox,
    Polygons,
    PolyMetadata,
    UndoState,
} from 'src/components/image-labelling/image-labelling.model';
import { Injectable } from '@angular/core';
import { Utils } from '../types/utils/utils';

@Injectable({
    providedIn: 'any',
})
export class UndoRedoService {
    private currentArr: Array<UndoState> = [];
    private undoArr: Array<UndoState> = [];
    private redoArr: Array<UndoState> = [];
    private maxStageSize: number = 51;
    private allowUndo: boolean = false;
    private allowRedo: boolean = false;
    private utility: Utils = new Utils();

    constructor() {}

    removeLastArray = (arr: UndoState[]): UndoState => arr.splice(-1, 1)[0];

    public appendStages(stages: UndoState): void {
        if (stages) {
            this.redoArr = [];
            this.allowRedo = false;
            this.currentArr.length === 0
                ? this.currentArr.push(this.utility.deepCloneVariable(stages))
                : (this.undoArr.length === this.maxStageSize ? this.undoArr.splice(0, 1) : {},
                  this.undoArr.push(this.removeLastArray(this.currentArr)),
                  this.currentArr.push(this.utility.deepCloneVariable(stages)),
                  (this.allowUndo = true));
        }
    }

    public clearAllStages(): void {
        this.currentArr = [];
        this.undoArr = [];
        this.redoArr = [];
        this.allowUndo = false;
        this.allowRedo = false;
    }

    public undo(): UndoState {
        this.allowRedo = true;
        if (this.undoArr.length > 0) {
            this.redoArr.push(this.removeLastArray(this.currentArr));
            const tmpStages: UndoState = this.removeLastArray(this.undoArr);
            this.currentArr.push(tmpStages);
            this.undoArr.length === 0 ? (this.allowUndo = false) : (this.allowUndo = true);
            return tmpStages;
        }
        return null;
    }

    public redo(): UndoState {
        let tmpStages: UndoState = null;
        if (this.redoArr.length !== 0) {
            this.undoArr.push(this.removeLastArray(this.currentArr));
            tmpStages = this.removeLastArray(this.redoArr);
            this.currentArr.push(tmpStages);
            this.redoArr.length === 0 ? (this.allowRedo = false) : (this.allowRedo = true);
        }
        this.undoArr.length > 0 ? (this.allowUndo = true) : (this.allowUndo = false);

        return tmpStages;
    }

    public clearRedundantStages() {
        // TODO:Solve bugs here
        /** Daniel: Unable to shortcut code logic due to the Type embedded into 'currentArr.meta' prop */
        if (this.currentArr[0]?.meta && 'Polygons' in this.currentArr[0].meta) {
        } else {
            if (this.undoArr.length > 0) {
                const last2Stages: boolean = this.isStatgeChange(
                    (this.undoArr[this.undoArr.length - 1]?.meta as BboxMetadata).bnd_box,
                );
                last2Stages ? (this.currentArr.pop(), this.currentArr.push(this.removeLastArray(this.undoArr))) : {};
            }
        }
    }

    public isAllowRedo() {
        return this.allowRedo;
    }

    public isAllowUndo() {
        return this.allowUndo;
    }

    public isMethodChange(currMethod: string): boolean {
        if (this.currentArr[0]?.method !== currMethod) {
            return true;
        }
        return false;
    }

    public replaceStages(stages: UndoState) {
        stages ? (this.currentArr[0] = this.utility.deepCloneVariable(stages)) : {};
    }

    public isStatgeChange(notate: Boundingbox[] | Polygons[] | null): boolean {
        if (notate === null || notate === undefined) {
            return false;
        }
        if (this.isAnnotationChange(notate) || this.isLabelChange(notate)) {
            return true;
        }
        return false;
    }

    private isLabelChange(notate: Boundingbox[] | Polygons[] | null): boolean {
        /** Daniel: Unable to shortcut code logic due to the Type embedded into 'currentArr.meta' prop */
        if (this.currentArr[0]?.meta && 'Polygons' in this.currentArr[0]?.meta) {
            const polybox: Polygons[] = notate as Polygons[];
            const comparePolyBoxes: Polygons[] = (this.currentArr[0]?.meta as PolyMetadata).polygons;
            if (polybox.length !== comparePolyBoxes.length) {
                return true;
            } else {
                for (const [i, { label }] of comparePolyBoxes.entries()) {
                    label !== polybox[i].label ? true : null;
                }
            }
        } else {
            const bndBox: Boundingbox[] = notate as Boundingbox[];
            const compareBndBox: Boundingbox[] = (this.currentArr[0]?.meta as BboxMetadata).bnd_box;
            if (bndBox.length !== compareBndBox.length) {
                return true;
            } else {
                for (const [i, { label }] of compareBndBox.entries()) {
                    if (bndBox[i].label !== label) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    private isAnnotationChange(notate: Boundingbox[] | Polygons[] | null) {
        /** Daniel: Unable to shortcut code logic due to the Type embedded into 'currentArr.meta' prop */
        if (this.currentArr[0]?.meta && 'Polygons' in this.currentArr[0]?.meta) {
            if (this.currentArr.length < 1) {
                return true;
            } else {
                const polygons: Polygons[] = notate as Polygons[];
                const comparePolygons: Polygons[] = (this.currentArr[0]?.meta as PolyMetadata).polygons;
                if (polygons.length !== comparePolygons.length) {
                    return true;
                } else {
                    const compareResult: boolean = comparePolygons.some(({ coorPt: compareCoorPt }, i) =>
                        polygons.some(
                            ({ coorPt: oriCoorPt }, j) =>
                                compareCoorPt[i].x !== oriCoorPt[j].x || compareCoorPt[i].y !== oriCoorPt[j].y,
                        ),
                    );
                    return compareResult ? true : null;
                }
            }
        } else {
            if (this.currentArr.length < 1) {
                return true;
            } else {
                const thisBox: Boundingbox[] = notate as Boundingbox[];
                const compareBox: Boundingbox[] = (this.currentArr[0]?.meta as BboxMetadata).bnd_box;
                if (thisBox.length !== compareBox.length) {
                    return true;
                } else {
                    for (const [i, { x1, x2, y1, y2 }] of thisBox.entries()) {
                        return x1 !== compareBox[i].x1 ||
                            x2 !== compareBox[i].x2 ||
                            y1 !== compareBox[i].y1 ||
                            y2 !== compareBox[i].y2
                            ? true
                            : null;
                    }
                }
            }
        }
        return false;
    }
}
