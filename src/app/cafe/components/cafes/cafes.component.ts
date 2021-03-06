import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.scss']
})
export class CafesComponent implements OnInit {

  @Input() product: Product;
  @Output() productAdd: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addcart() {
    console.log('añadir al carrito');
    this.productAdd.emit(this.product.codigo);
  }

}
