import { Component, OnInit } from '@angular/core';

import { NguCarousel } from '@ngu/carousel';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as spanish } from './i18n/es';

@Component({
    selector   : 'home',
    templateUrl: './home.component.html',
    styleUrls  : ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
    public carousel: NguCarousel;

    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(english, spanish);
    }

    ngOnInit(): void {
        this.carousel = {
            grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: true,
                pointStyles: `
                    .ngucarouselPoint {
                        list-style-type: none;
                        text-align: center;
                        padding: 0px;
                        margin: 0;
                        white-space: nowrap;
                        overflow: auto;
                        position: absolute;
                        width: 100%;
                        bottom: 5px;
                        left: 0;
                        box-sizing: border-box;
                    }
                    .ngucarouselPoint li {
                        width: 13px;
                        height: 13px;
                        display: inline-block;
                        border-radius: 999px;
                        background: #999997;
                        padding: 5px;
                        margin: 0 3px;
                        transition: .4s ease all;
                    }
                    .ngucarouselPoint li.active {
                        background: #2e05e9;
                        width: 15px;
                        height: 15px;
                    }
                    `
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
        };
    }
}
