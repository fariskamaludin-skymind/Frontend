/**
 * @license
 * Use of this source code is governed by Apache License 2.0 that can be
 * found in the LICENSE file at https://github.com/CertifaiAI/Classifai_FrontEnd/blob/main/LICENSE
 */

import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
    selector: 'video-timeline',
    templateUrl: './video-timeline.component.html',
    styleUrls: ['./video-timeline.component.scss'],
})
export class VideoTimelineComponent implements OnInit, OnChanges {
    occupiedSpace = [...Array(27)];
    @Input() _totalFrame = 0;
    @ViewChild('videoTimelineRef') _videoTimelineRef!: ElementRef<HTMLDivElement>;
    totalFrameArr: number[] = [];
    activeFrame = 0;
    constructor() {}

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes._totalFrame.currentValue) {
            this.totalFrameArr = [...Array(changes._totalFrame.currentValue as number)];
        }
    }

    onScroll = ({ deltaY }: WheelEvent) => {
        const scrollTo = this._videoTimelineRef.nativeElement.scrollLeft;
        scrollTo !== undefined &&
            this._videoTimelineRef.nativeElement.scrollTo({
                ...(deltaY > 0 ? { left: scrollTo + 25 } : { left: scrollTo - 25 }),
            });
        deltaY > 0
            ? this.activeFrame !== this._totalFrame - 1
                ? (this.activeFrame += 1)
                : this.activeFrame
            : this.activeFrame !== 0
            ? (this.activeFrame -= 1)
            : this.activeFrame;
    };

    displayFrameIndicator = (index: number): string => {
        let className = '';
        className += index === 0 && ' figure ';
        className += this.activeFrame === index && ' cursor row';
        className += ' timelineCell clickable';
        return className;
    };

    onClickVideoTImeline = (index: number) => {
        this.activeFrame = index;
    };
}
