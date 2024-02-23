import {Component, inject} from '@angular/core';
import {TelegramService} from "../../services/telegram.service";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})

export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);

  constructor() {
    this.telegram.MainButton.show();
  }
}
