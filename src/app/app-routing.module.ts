import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminGuard } from '@guardianes/admin/admin.guard';
import { CajeroGuard } from '@guardianes/cajero/cajero.guard';
import { LayoutComponent } from './layout/layout.component';
import { QuicklinkStrategy } from 'ngx-quicklink';

/* Rutas de acceso a los diferentes módulos y páginas
independientes del e-commerce mediante lazy loading.*/


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'productos',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'helados',
                loadChildren: () => import('./icecream/icecream.module').then(m => m.IcecreamModule)
            },
            {
                path: 'crepes y wafles',
                loadChildren: () => import('./crepe/crepe.module').then(m => m.CrepeModule)
            },
            {
                path: 'arepas',
                loadChildren: () => import('./arepas/arepas.module').then(m => m.ArepasModule)
            },
            {
                path: 'shakes',
                loadChildren: () => import('./shake/shake.module').then(m => m.ShakeModule)
            },
            {
                path: 'cafes',
                loadChildren: () => import('./cafe/cafe.module').then(m => m.CafeModule)
            },
            {
                path: 'contacto',
                loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule)
            },
            {
                path: 'order',
                loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
                canActivate: [CajeroGuard, AdminGuard]
            },
            {
                path: 'perfil',
                loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
            }
        ]
    },
    {
        path: 'auth',
        loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [AdminGuard]
    },
    {
        path: '**',
        loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy,
    initialNavigation: 'enabled'
})],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {}
