import { Component, Input } from '@angular/core';
import { CardData } from '../../constants/subscriptionPrices';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() cardData!:CardData

}
