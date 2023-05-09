import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './containers/product-list/product-list.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {}
