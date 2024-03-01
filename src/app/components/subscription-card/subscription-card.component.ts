import { Component, Input } from '@angular/core';
import { SubscriptionPrices } from "../../constants/subscriptionPrices"

@Component({
  selector: 'app-subscription-card',
  standalone: true,
  imports: [],
  templateUrl: './subscription-card.component.html',
  styleUrl: './subscription-card.component.scss'
})
export class SubscriptionCardComponent {

  @Input() cardData!:SubscriptionPrices

  constructor() {
    console.log(this.cardData);
  }
  

}