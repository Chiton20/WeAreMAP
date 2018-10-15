import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule, MatGridListModule } from '@angular/material';
import { FuseWidgetModule } from '../../../@fuse/components';

import { FuseSharedModule } from '@fuse/shared.module';

import { ServiciosComponent } from './servicios.component';

const routes = [
    {
        path     : 'servicios',
        component: ServiciosComponent
    }
];

@NgModule({
    declarations: [
        ServiciosComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatIconModule,
        MatGridListModule,
        FuseWidgetModule,
        TranslateModule,

        FuseSharedModule
    ],
    exports: [
        ServiciosComponent
    ]
})
export class ServiciosModule { }
