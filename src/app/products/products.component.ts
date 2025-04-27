import { CommonModule } from '@angular/common';
import { Component  } from '@angular/core';
import {  Router, RouterModule } from '@angular/router';
import { productDetails } from '../Model/productDetails.model';

import { Data } from '../ProductsData/Items.data';
import { InfoComponent } from '../info/info.component';



@Component({
  selector: 'app-products',
  imports: [CommonModule,RouterModule,InfoComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
 
//   Items : productDetails[] =Data;
  Items : Array<productDetails> = Data;

  infoItemId: number =0;

  constructor (private router: Router){}
    
   goToInfo(ItemId:number)
  {
     this.router.navigate(['/info',ItemId]);
  }

   cartItemId :number=0;

   goToCart(ItemId:number)
  {
    this.router.navigate(['cart',ItemId]);
  }
   
}
