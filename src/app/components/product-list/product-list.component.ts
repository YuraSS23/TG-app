import {Component, Input} from '@angular/core';
import {IProduct} from "../../services/products.service";
import {RouterLink} from "@angular/router";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
 @Input() title: string;
 @Input() subTitle: string;
 @Input() products: IProduct[];
}
