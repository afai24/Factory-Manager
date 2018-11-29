import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { TextileproductsComponent } from './components/textileproducts/textileproducts.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'textileproduct/:id', component: TextileproductsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];