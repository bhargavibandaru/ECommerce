import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Data } from '../ProductsData/Items.data';
import { PaymentComponent } from '../payment/payment.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,RouterModule,PaymentComponent,ProductsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItemId !: number;
  
  itemDetails :any;

  constructor (private route :ActivatedRoute){}

  ngOnInit()
  {
    this.cartItemId =Number(this.route.snapshot.paramMap.get('id'));

    this.itemDetails =Data.find (t => t.ItemId== this.cartItemId)
  }
  Items : boolean =true;

  noItems: boolean=false;

  delete()
  {
    this.Items =  false,
    this.noItems = true
  }

}
