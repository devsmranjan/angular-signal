import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from './models';

@Injectable()
export class ProductService {
  API_URL =
    'https://devsmranjan-crispy-space-capybara-5v6446xrpx62449v-3000.preview.app.github.dev';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductInterface[]>(`${this.API_URL}/products`);
  }
}
