import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.products = this.cartService.getProducts();
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}

