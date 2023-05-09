import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductService } from './product.service';
import { ProductStore } from './product.store';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService, ProductStore],
})
export class ProductComponent {}
