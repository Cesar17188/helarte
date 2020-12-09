import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-helados',
  templateUrl: './helados.component.html',
  styleUrls: ['./helados.component.scss']
})
export class HeladosComponent implements OnInit {

  @Input() product: Product;
  @Output() productAdd: EventEmitter<any> = new EventEmitter();
  today = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  addcart() {
      console.log('añadir al carrito');
      this.productAdd.emit(this.product.codigo);
  }
}
