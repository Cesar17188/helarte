import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  // pedido y respuesta de datos desde la base de datos
  // hacia los componentes de uso del usuario.
  @Input() product: Product;
  @Output() productAdd: EventEmitter<any> = new EventEmitter();

  constructor() { }

  // función que registra el evento del paso de producto
  // tslint:disable-next-line: typedef
  addcart() {
    this.productAdd.emit(this.product.codigo);
  }
}
