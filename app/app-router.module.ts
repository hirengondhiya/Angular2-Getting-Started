import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

import { ProductDetailGuard } from './products/product-detail-guard.service';

const routes : Routes = [
    { path:'products', component: ProductListComponent },
    { path:'product/:id', component: ProductDetailComponent, canActivate:[ ProductDetailGuard ]},
    { path:'welcome', component:WelcomeComponent },
    { path:'', redirectTo:'welcome', pathMatch:'full' },
    { path:'**', redirectTo:'welcome', pathMatch:'full'}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    providers:[ProductDetailGuard]
})
export class AppRouterModule{}

export const routableAppComponents = [
    ProductListComponent,
    ProductDetailComponent,
    WelcomeComponent
]