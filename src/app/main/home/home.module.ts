import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material';
import { NguCarouselModule } from '@ngu/carousel';

import { FuseSharedModule } from '@fuse/shared.module';

import { HomeComponent } from './home.component';
import { PortafolioModule } from '../portafolio/portafolio.module';

const routes = [
    {
        path     : 'home',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,
        TranslateModule,
        NguCarouselModule,

        FuseSharedModule,

        PortafolioModule
    ],
    exports     : [
        HomeComponent
    ]
})

export class HomeModule
{
}
