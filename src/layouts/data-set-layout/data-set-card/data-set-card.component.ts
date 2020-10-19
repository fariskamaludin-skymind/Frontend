import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { projectSchema } from './../data-set-layout.model';

type CardSchema = {
    clickIndex: number;
};
@Component({
    selector: 'data-set-card',
    templateUrl: './data-set-card.component.html',
    styleUrls: ['./data-set-card.component.scss'],
})
export class DataSetCardComponent implements OnInit, OnChanges {
    @Input() _jsonSchema!: projectSchema;
    @Output() _onClick: EventEmitter<string> = new EventEmitter();
    @Output() _onUpload: EventEmitter<string> = new EventEmitter();
    cardSchema: CardSchema = {
        clickIndex: -1,
    };
    // status = 'New';
    // createdDate = '22092020';
    constructor() {}

    ngOnInit(): void {}

    onOpenProject = (index: number, projectName: string): void => {
        index === this.cardSchema.clickIndex ? null : this._onClick.emit(projectName);
    };

    onUploadFile = (index: number, projectName: string): void => {
        this.cardSchema = { clickIndex: index };
        this._onUpload.emit(projectName);
    };

    onDisplayMore = (event: Event, index: number): void => {
        // event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
        const { clickIndex } = this.cardSchema;
        this.cardSchema = { ...this.cardSchema, clickIndex: clickIndex === index ? -1 : index };
    };

    ngOnChanges(changes: SimpleChanges): void {
        // console.log(changes);
    }
}
