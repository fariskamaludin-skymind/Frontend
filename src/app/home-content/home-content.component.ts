import { cardFieldSchema } from 'src/layouts/home-layout/home-card/home-card.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home-content',
    templateUrl: './home-content.component.html',
    styleUrls: ['./home-content.component.css'],
})
export class HomeContentComponent implements OnInit {
    languageArr: (string | RegExpMatchArray)[] = [];
    jsonSchema: cardFieldSchema;

    constructor(private _router: Router) {
        this.jsonSchema = {
            fields: [
                {
                    enabled: false,
                    urlPath: '',
                    hoverLabel: 'comingSoon',
                    title: 'tabular',
                    imgPath: '../../assets/classifai-home-layout/Classifai_Thumbnail_Tabular.jpg',
                    imgAlt: 'tabular',
                    logoPath: '../../assets/classifai-home-layout/ClassifaiThumbnail_Icon_CSV.png',
                    logoAlt: 'CSV',
                },
                {
                    enabled: true,
                    urlPath: '/imglabel',
                    title: 'image',
                    imgPath: '../../assets/classifai-home-layout/Classifai_Thumbnail_Image.jpg',
                    imgAlt: 'image',
                    logoPath: '../../assets/classifai-home-layout/ClassifaiThumbnail_Icon_JPEG.png',
                    logoAlt: 'image',
                },
                {
                    enabled: false,
                    urlPath: '',
                    hoverLabel: 'comingSoon',
                    title: 'video',
                    imgPath: '../../assets/classifai-home-layout/Classifai_Thumbnail_Video.jpg',
                    imgAlt: 'video',
                    logoPath: '../../assets/classifai-home-layout/ClassifaiThumbnail_Icon_MP4.png',
                    logoAlt: 'Video',
                },
                {
                    enabled: false,
                    urlPath: '',
                    hoverLabel: 'comingSoon',
                    title: 'voice',
                    imgPath: '../../assets/classifai-home-layout/Classifai_Thumbnail_Voice.jpg',
                    imgAlt: 'voice',
                    logoPath: '../../assets/classifai-home-layout/ClassifaiThumbnail_Icon_MP3.png',
                    logoAlt: 'voice',
                },
            ],
        };
    }

    ngOnInit(): void {}

    navigate(url: string): void {
        // console.log(url);
        this._router.navigate([url]);
    }
}
