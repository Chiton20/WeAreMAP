import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'home',
        title    : 'INICIO',
        translate: 'NAV.HOME.TITLE',
        type     : 'item',
        url      : '/home'
    },
    {
        id       : 'portafolio',
        title    : 'APORTACIONES AL MUNDO',
        translate: 'NAV.PORTAFOLIO.TITLE',
        type     : 'item',
        url      : '/portafolio'
    },
    {
        id       : 'servicios',
        title    : 'SI NO EXISTE LO CREAMOS',
        translate: 'NAV.SERVICIOS.TITLE',
        type     : 'item',
        url      : '/servicios'
    },
    {
        id       : 'contacto',
        title    : 'CONTACTO',
        translate: 'NAV.CONTACTO.TITLE',
        type     : 'item',
        url      : '/contacto'
    }
];
