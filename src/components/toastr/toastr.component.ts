import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'toastr',
    templateUrl: './toastr.component.html',
    styleUrls: ['./toastr.component.scss'],
})
export class ToastrComponent implements OnInit, OnChanges {
    @Input() _processingNum: number = 0;
    doneProcess = false;

    constructor() {}

    ngOnInit(): void {}

    delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async ngOnChanges(changes: SimpleChanges): Promise<void> {
        // console.log(changes);
        if (changes._processingNum) {
            console.log(changes._processingNum);
            if (changes._processingNum.previousValue === 1 && changes._processingNum.currentValue === 0) {
                this.doneProcess = true;
                await this.delay(1000);
                this.doneProcess = false;
            }
        }
    }
}
