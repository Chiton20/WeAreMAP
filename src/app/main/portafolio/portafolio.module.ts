import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { PortafolioComponent } from './portafolio.component';

const routes = [
    {
        path     : 'portafolio',
        component: PortafolioComponent
    }
];

@NgModule({
    declarations: [
        PortafolioComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatIconModule,
        TranslateModule,

        FuseSharedModule
    ],
    exports: [
        PortafolioComponent
    ]
})
export class PortafolioModule { }
