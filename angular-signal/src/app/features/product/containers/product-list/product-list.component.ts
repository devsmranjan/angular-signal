import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../models';
import { ProductStore } from '../../product.store';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products = this.productStore.products;

  constructor(private productStore: ProductStore) {}
}
