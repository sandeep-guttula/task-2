import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SubscriptionCardComponent } from './components/subscription-card/subscription-card.component';
import { subscriptionPrices , SubscriptionPrices,cardData,CardData } from './constants/subscriptionPrices';
import { CardComponent } from './components/card/card.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,SubscriptionCardComponent,CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  subscriptionData:SubscriptionPrices[] = subscriptionPrices
  cardInfo:CardData[]= cardData;
  
}
