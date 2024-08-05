import { booleanAttribute, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductModel } from './component/models/product.modle';
import { StoreService } from './component/models/services/store.service';
import { TotalMoneyComponent } from './component/total-money/total-money.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ProductCardComponent,
    TotalMoneyComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Second-project';

  constructor(public StoreService: StoreService) {
    console.log(this.StoreService.products);
  }
}
