import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;
  displayedColumns: string[] = ['Imagen', 'Producto', 'Adicionales', 'Fruta', 'Precio'];

  constructor(
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$
    .pipe(map((products: []) => {
      const distintos = [...new Set(products)];
      return distintos;
    }));
    }

  // tslint:disable-next-line:typedef
  getTotalPrice() {
   return this.cartService.totalCart();
  }

  ngOnInit(): void {
  }

}
