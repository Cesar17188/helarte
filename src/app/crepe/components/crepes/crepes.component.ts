import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-crepes',
  templateUrl: './crepes.component.html',
  styleUrls: ['./crepes.component.scss']
})
export class CrepesComponent implements OnInit {

  @Input() product: Product;
  @Output() productAdd: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  addcart() {
    console.log('añadir al carrito');
    this.productAdd.emit(this.product.codigo);
  }
}
