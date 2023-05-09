import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../models';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductService],
})
export class ProductListComponent {
  products$ = this.productService.getProducts();

  constructor(private productService: ProductService) {}
}
