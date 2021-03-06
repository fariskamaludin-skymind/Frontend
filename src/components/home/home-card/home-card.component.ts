/**
 * @license
 * Use of this source code is governed by Apache License 2.0 that can be
 * found in the LICENSE file at https://github.com/CertifaiAI/Classifai_FrontEnd/blob/main/LICENSE
 */

import { CardFieldSchema } from '../../../layouts/home-layout/home-layout.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'home-card',
    templateUrl: './home-card.component.html',
    styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnInit {
    @Input() _jsonSchema!: CardFieldSchema;
    @Output() _onThumbnailClick: EventEmitter<string> = new EventEmitter();
    hover!: boolean;
    hoverIndex!: number;

    constructor() {}

    ngOnInit() {}

    mouseEventCapture(event: MouseEvent, index: number): void {
        const { type } = event;
        this.hover = type === 'mouseover' ? true : false;
        this.hoverIndex = index;
    }

    emitParentUrl(enabled: boolean, url: string): void {
        enabled && this._onThumbnailClick.emit(url);
    }

    hoverStyling = (index: number, isHover: boolean, hoverLabel: string, imgPath: string): object =>
        index === this.hoverIndex && isHover
            ? {
                  'background-image': 'url(' + imgPath + ')',
                  opacity: '1.0',
                  cursor: hoverLabel ? 'not-allowed' : 'pointer',
              }
            : {
                  'background-image': 'url(' + imgPath + ')',
                  opacity: '0.5',
              };

    conditionalHoverPlaceholder = (index: number, hoverLabel: string): string =>
        index === this.hoverIndex && hoverLabel ? hoverLabel : '';
}
