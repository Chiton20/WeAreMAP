import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

// Third party imports


import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { HomeModule } from 'app/main/home/home.module';
import { PortafolioModule} from 'app/main/portafolio/portafolio.module';
import { ServiciosModule } from 'app/main/servicios/servicios.module';

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'home'
    },
    {
        path      : 'portafolio',
        redirectTo: 'portafolio'
    },
    {
        path      : 'servicios',
        redirectTo: 'servicios'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // Ngx-Bootstrap


        // App modules
        LayoutModule,
        HomeModule,
        PortafolioModule,
        ServiciosModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
