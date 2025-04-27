import { CommonModule, ɵnormalizeQueryParams } from '@angular/common';
import { Component, Input, numberAttribute, OnInit } from '@angular/core';
import { productDetails } from '../Model/productDetails.model';
import { Data } from '../ProductsData/Items.data';
import { ActivatedRoute, RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-info',
  imports: [CommonModule,RouterModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent  implements OnInit{
   itemId ! : number;

   itemDetails: any;

  constructor (private route:ActivatedRoute ,private router :Router) {}

  ngOnInit() {
 
    this.itemId = Number(this.route.snapshot.paramMap.get('id'));

    this.itemDetails=Data.find( t=> t.ItemId == this.itemId);
    
  }


  cartItemId :number =0;

 
  goToCart(ItemId:number)
  {
    this.router.navigate(['/cart',ItemId]);
  }

  
}
