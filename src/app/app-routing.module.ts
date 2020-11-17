import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

/* Rutas de acceso a los diferentes módulos y páginas
independientes del e-commerce mediante lazy loading.*/


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'helados',
                loadChildren: () => import('./icecream/icecream.module').then(m => m.IcecreamModule)
            },
            {
                path: 'crepes',
                loadChildren: () => import('./crepe/crepe.module').then(m => m.CrepeModule)
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
                loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
            },
            {
                path: 'perfil',
                loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
            }
        ]
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: '**',
        loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}