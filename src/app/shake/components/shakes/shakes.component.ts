import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-shakes',
  templateUrl: './shakes.component.html',
  styleUrls: ['./shakes.component.scss']
})
export class ShakesComponent implements OnInit {

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
