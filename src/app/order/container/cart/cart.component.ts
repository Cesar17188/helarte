import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products$: Observable<Product[]>;
  displayedColumns: string[] = [
    'Imagen',
    'Producto',
    'Adicionales',
    'Fruta',
    'Precio',
    'actions',
  ];
  products: Product[];

  constructor(private cartService: CartService) {
    this.products$ = this.cartService.cart$.pipe(
      map((products: []) => {
        const distintos = [...new Set(products)];
        return distintos;
      })
    );

    console.log(this.products$);
  }

  // tslint:disable-next-line:typedef
  getTotalPrice() {
    return this.cartService.totalCart();
  }

  // tslint:disable-next-line:typedef
  public remove(product: Product) {
    this.cartService.removeElementCart(product);
  }

  ngOnInit(): void {}
}
