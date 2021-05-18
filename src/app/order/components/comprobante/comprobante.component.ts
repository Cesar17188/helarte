import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CLIENT } from '@core/models/client.model';
import { COMPROBANTE } from '@core/models/comprobante.model';
import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart/cart.service';
import { ClientsService } from '@core/services/clients/clients.service';
import { ComprobantesService } from '@core/services/comprobantes/comprobantes.service';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { buffer, map } from 'rxjs/operators';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.component.html',
  styleUrls: ['./comprobante.component.scss']
})
export class ComprobanteComponent implements OnInit {

  cliente: FormGroup;
  clients = [];
  newClient: CLIENT;
  newComprobante: COMPROBANTE;

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
    private comprobanteService: ComprobantesService,
    private router: Router,
    // tslint:disable-next-line:variable-name
    private _snackBar: MatSnackBar
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
    try{
      this.clientService.createClient(this.cliente.value);
      this.openSnackBar('Cliente Ingresado', 'OK');
    }catch (err){
      this.openSnackBar('Cliente no Ingresado', 'OK');
    }
  }

  // tslint:disable-next-line:typedef
  saveComprobante() {
    const productslist = this.cartService.getProducts().map( prod => {
      return {
        producto: prod.producto,
        precioVenta: prod.precioVenta
      };
    });
    const productsActual = Object.assign({...productslist});
    const totalActual = this.cartService.totalCart();
    this.newComprobante = {
      cliente: this.cliente.value,
      fecha: firebase.default.firestore.FieldValue.serverTimestamp(),
      products: productsActual,
      total: totalActual,
    };
    console.log(this.newComprobante);
    try{
      this.comprobanteService.createComprobante(this.newComprobante);
      this.openSnackBar('Comprobante Ingresado', 'OK');
    }catch (err){
      this.openSnackBar('Comprobante no Ingresado', 'OK');
    }
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
      if (this.newClient !== undefined){
        this.cliente.patchValue(this.newClient);
      } else {
        const identificationActual = this.identificationField.value;
        this.cliente.reset();
        this.openSnackBar('Cliente no Encontrado', 'OK');
        this.cliente.controls.identification.setValue(identificationActual);
      }
    });
  }

  // tslint:disable-next-line:typedef
  eliminarCliente() {
    this.cliente.reset();
  }

  // tslint:disable-next-line:typedef
  generarPDF(){
    html2canvas(document.getElementById('comprobante'), {
      allowTaint: true,
      useCORS: false,
      scale: 2
    }).then(canvas => {
      const img = canvas.toDataURL('image/png');
      const doc = new jsPDF();
      doc.addImage(img, 'PNG', 5, 30, 195, 105);
      doc.save('comprobante_pdf');
    });
  }

  // tslint:disable-next-line:typedef
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  // tslint:disable-next-line:typedef
  finalizarCompra() {
    this.router.navigate(['/']);
    window.location.reload();
  }

}
