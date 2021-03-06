/**
 * @license
 * Use of this source code is governed by Apache License 2.0 that can be
 * found in the LICENSE file at https://github.com/CertifaiAI/Classifai_FrontEnd/blob/main/LICENSE
 */

import { CardChoiceImgLblUrlPath, CardChoiceSchema } from './home-layout.model';
import { Component, OnInit } from '@angular/core';
import { ImageLabellingModeService } from './../../components/image-labelling/image-labelling-mode.service';
import { ModalBodyStyle } from 'src/components/modal/modal.model';
import { ModalService } from 'src/components/modal/modal.service';
import { Router } from '@angular/router';
import { ImageLabellingMode } from 'src/components/image-labelling/image-labelling.model';
import { LanguageService } from 'src/shared/services/language.service';

@Component({
    selector: 'home-layout',
    templateUrl: './home-layout.component.html',
    styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {
    navigateUrl = '';
    modalBodyStyle: ModalBodyStyle = {
        minHeight: '37vh',
        maxHeight: '37vh',
        minWidth: '31vw',
        maxWidth: '31vw',
        margin: '15vw 71vh',
        overflow: 'none',
    };
    cardSchema: CardChoiceSchema = {
        fields: [
            {
                enabled: true,
                title: 'imageOpt.boundingBoxes',
                urlPath: 'boundingbox',
                imgPath: '../../assets/landing-page/Classifai_Thumbnail_Band_Labeling.jpg',
                imgAlt: 'Bounding Box',
            },
            {
                enabled: false,
                title: 'imageOpt.polygons',
                urlPath: 'segmentation',
                hoverLabel: 'comingSoon',
                imgPath: '../../assets/landing-page/Classifai_Thumbnail_Band_Segmentation.jpg',
                imgAlt: 'Segmentation',
            },
        ],
    };
    readonly modalIdImgLbl = 'modal-home-image-labelling';
    hover: boolean = false;
    hoverIndex: number = -1;

    constructor(
        private _modalService: ModalService,
        private _router: Router,
        private _imgLblMode: ImageLabellingModeService,
        private _languageService: LanguageService,
    ) {
        const langsArr: string[] = ['landing-page-en', 'landing-page-cn', 'landing-page-ms'];
        this._languageService.initializeLanguage(`landing-page`, langsArr);
    }

    ngOnInit() {}

    navigate(url: string): void {
        this.navigateUrl = url;
        this.onDisplayModal(this.modalIdImgLbl);
    }

    onDisplayModal = (id: string) => {
        this._modalService.open(id);
    };

    onCloseModal = (id: string, enabled: boolean, path?: CardChoiceImgLblUrlPath) => {
        if (enabled) {
            if (path) {
                const chosenMode: ImageLabellingMode = path === 'boundingbox' ? 'bndbox' : 'seg';
                this._imgLblMode.setState(chosenMode);
                this._router.navigate([this.navigateUrl]);
            }
            this._modalService.close(id);
        }
    };

    mouseEventCapture(event: MouseEvent, index: number): void {
        const { type } = event;
        this.hover = type === 'mouseover' ? true : false;
        this.hoverIndex = index;
    }

    hoverStyling = (index: number, isHover: boolean, enabled: boolean): Partial<CSSStyleDeclaration> => {
        return index === this.hoverIndex && isHover
            ? {
                  opacity: '1.0',
                  cursor: enabled ? 'pointer' : 'not-allowed',
                  // minWidth: '16vw',
                  // maxWidth: '16vw',
              }
            : {
                  opacity: '0.5',
                  // minWidth: '16vw',
                  // maxWidth: '16vw',
              };
    };

    conditionalHoverPlaceholder = (index: number, hoverLabel: string): string =>
        index === this.hoverIndex && hoverLabel ? hoverLabel : '';
}
