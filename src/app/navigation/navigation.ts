import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'home',
        title    : 'Inicio',
        translate: 'NAV.HOME.TITLE',
        type     : 'item',
        url      : '/inicio'
    },
    {
        id       : 'portafolio',
        title    : 'Aportaciones al mundo',
        translate: 'NAV.PORTAFOLIO.TITLE',
        type     : 'item',
        url      : '/home'
    },
    {
        id       : 'servicios',
        title    : 'Si no existe lo creamos',
        translate: 'NAV.SERVICIOS.TITLE',
        type     : 'item',
        url      : '/home'
    },
    {
        id       : 'contacto',
        title    : 'Contacto',
        translate: 'NAV.CONTACTO.TITLE',
        type     : 'item',
        url      : '/home'
    }
];
