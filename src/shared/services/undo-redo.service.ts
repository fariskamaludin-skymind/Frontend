import { undoState } from './../../layouts/image-labelling-layout/image-labelling-layout.model';
import { Injectable } from '@angular/core';
import { utils } from '../../classes/utils';

@Injectable({
    providedIn: 'any',
})
export class UndoRedoService {
    private CurrentArr: Array<undoState> = [];
    private UndoArr: Array<undoState> = [];
    private RedoArr: Array<undoState> = [];
    private MaxStageSize: number = 51;
    private allowUndo: boolean = false;
    private allowRedo: boolean = false;
    private utility: utils = new utils();

    constructor() {}

    public appendStages(stages: undoState): void {
        if (stages && stages !== null) {
            this.UndoArr = [];
            this.allowRedo = false;
            this.CurrentArr.length === 0
                ? this.CurrentArr.push(this.utility.deepCloneVariable(stages))
                : (this.UndoArr.length === this.MaxStageSize ? this.UndoArr.splice(0, 1) : {},
                  this.UndoArr.push(this.CurrentArr.pop()!),
                  this.CurrentArr.push(this.utility.deepCloneVariable(stages)),
                  (this.allowUndo = true));
        }
    }

    public clearAllStages(): void {
        this.CurrentArr = [];
        this.UndoArr = [];
        this.RedoArr = [];
        this.allowUndo = false;
        this.allowRedo = false;
    }

    public undo(): undoState {
        this.allowRedo = true;
        if (this.UndoArr.length !== 0) {
            this.RedoArr.push(this.CurrentArr.pop()!);
            let tmpStages: undoState = this.UndoArr.pop()!;
            this.CurrentArr.push(tmpStages);
            this.UndoArr.length === 0 ? (this.allowUndo = false) : (this.allowUndo = true);
            return tmpStages;
        }
        return null;
    }

    public redo(): undoState {
        let tmpStages: undoState = null;
        if (this.RedoArr.length !== 0) {
            this.UndoArr.push(this.CurrentArr.pop()!);
            tmpStages = this.RedoArr.pop()!;
            this.CurrentArr.push(tmpStages);
            this.RedoArr.length === 0 ? (this.allowRedo = false) : (this.allowRedo = true);
        }
        this.UndoArr.length > 0 ? (this.allowUndo = true) : (this.allowUndo = false);

        return tmpStages;
    }

    public isAllowRedo() {
        return this.allowRedo;
    }

    public isAllowUndo() {
        return this.allowUndo;
    }
}
