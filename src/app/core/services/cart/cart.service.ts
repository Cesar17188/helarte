import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Product } from '@core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  // tslint:disable-next-line:typedef
  addCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }

  // tslint:disable-next-line:typedef
  totalCart() {
    return this.products.map(t => t.precioVenta)
    .reduce((acc, value) => acc + value);
  }

  // tslint:disable-next-line:typedef
  removeElementCart(product: Product){
    const listCart = this.cart.getValue();

    const objIndex = listCart.findIndex((obj => obj.codigo === product.codigo));

    if (objIndex !== -1){
      listCart.splice(objIndex, 1);
    }

    this.cart.next(listCart);
  }

  // tslint:disable-next-line:typedef
  getProducts(){
    return this.cart.getValue();
  }
}
