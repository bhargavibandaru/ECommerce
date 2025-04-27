import { Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';



export const routes: Routes = [
    {path:'',component:ProductsComponent},

    { 
        path: 'info/:id', component: InfoComponent 
    },
    {
        path:'cart/:id',component :CartComponent
    },
    {
        path:'payment',component:PaymentComponent
    },
    {
        path:'products',component :ProductsComponent
    }
];
