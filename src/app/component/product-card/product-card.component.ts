import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../models/product.modle';
import { StoreService } from '../models/services/store.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: ProductModel;

  constructor(public storeService: StoreService) {}
}
