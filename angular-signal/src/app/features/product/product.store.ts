import { Injectable, signal } from '@angular/core';
import { ProductService } from './product.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable()
export class ProductStore {
  constructor(private productService: ProductService) {}

  readonly products = toSignal(this.productService.getProducts());
}
