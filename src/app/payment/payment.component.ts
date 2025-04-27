import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  randomNumber : number=0;

  paymentStatus()
  {
    const min=1;
    const max=50;
    this.randomNumber = Math.floor(Math.random() * (max-min +1)) + min;

    if(this.randomNumber % 2==0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  
}
