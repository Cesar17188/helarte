import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-arepas',
  templateUrl: './arepas.component.html',
  styleUrls: ['./arepas.component.scss']
})
export class ArepasComponent implements OnInit {

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
