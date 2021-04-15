import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CLIENT } from '@core/models/client.model';
import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart/cart.service';
import { ClientsService } from '@core/services/clients/clients.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.component.html',
  styleUrls: ['./comprobante.component.scss']
})
export class ComprobanteComponent implements OnInit {

  cliente: FormGroup;
  clients = [];
  newClient: CLIENT;

  products$: Observable<Product[]>;
  displayedColumns: string[] = [
    'Producto',
    'Precio'
  ];
  products: Product[];

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private clientService: ClientsService,
  ) {
    this.buildForm();
    this.products$ = this.cartService.cart$.pipe(
      map((products: []) => {
        const distintos = [...new Set(products)];
        return distintos;
      })
    );
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  private buildForm() {
    this.cliente = this.formBuilder.group({
      name: ['', [Validators.required]],
      identification: ['', [Validators.required]],
      direction: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  // tslint:disable-next-line:typedef
  get nameField() {
    return this.cliente.get('name');
  }

  // tslint:disable-next-line:typedef
  get identificationField() {
    return this.cliente.get('identification');
  }

  // tslint:disable-next-line:typedef
  get directionField() {
    return this.cliente.get('direction');
  }

  // tslint:disable-next-line:typedef
  get emailField() {
    return this.cliente.get('email');
  }

  // tslint:disable-next-line:typedef
  save() {
    this.clientService.createClient(this.cliente.value);
    console.log(this.cliente.value);
  }

  // tslint:disable-next-line:typedef
  getTotalPrice() {
    return this.cartService.totalCart();
  }

  // tslint:disable-next-line:typedef
  fetchCliente(id: string) {
    this.clientService.getClient(id).subscribe(data => {
      this.clients = data.map(e => {
        return {
          // tslint:disable-next-line:no-string-literal
          name: e.payload.doc.data()['name'],
          // tslint:disable-next-line:no-string-literal
          identification: e.payload.doc.data()['identification'],
          // tslint:disable-next-line:no-string-literal
          direction: e.payload.doc.data()['direction'],
          // tslint:disable-next-line:no-string-literal
          email: e.payload.doc.data()['email']
        };
      });
      this.newClient = this.clients[0];
      console.log(this.newClient);
      if (this.newClient !== undefined ){
        this.cliente.patchValue(this.newClient);
      } else {
        alert ('Cliente no encontrado');
      }
    });
  }

}
