import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireStorage } from '@angular/fire/storage';
import { Location } from '@angular/common';

import { HeladosService } from '@core/services/helados/helados.service';
import { CartService } from '@core/services/cart/cart.service';
import { ToppingDulceService } from '@core/services/topping-dulce/topping-dulce.service';
import { SalsasService } from '@core/services/salsas/salsas.service';
import { SaboresService } from '@core/services/sabores/sabores.service';

import { HELADO } from '@core/models/helado.model';
import { SABOR } from '@core/models/sabor.model';
import { SYRUP } from '@core/models/syrup.model';
import { TOPPING } from '@core/models/topping.model';
import { Product } from '@core/models/product.model';

import { SaboresContainer } from '@ingredients/containers/sabores/sabores.container';
import { SyrupsContainer } from '@ingredients/containers/syrups/syrups.container';
import { ToppingsContainer } from '@ingredients/containers/toppings/toppings.container';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-icecream-detail',
  templateUrl: './icecream-detail.component.html',
  styleUrls: ['./icecream-detail.component.scss']
})
export class IcecreamDetailComponent implements OnInit {

  // Variables de control del objeto helado
  helado: HELADO[];
  newHelado: Product;
  precioHelado: number;
  cono: string;

// Variables de control de sabores de helado

  sabor: SABOR[];
  sabor2: SABOR[];
  sabor3: SABOR[];
  listaSabores: SABOR[];
  codflavor: string;
  codflavor2: string;
  codflavor3: string;
  EneFlavorDos: boolean;
  EneFlavorTres: boolean;
  data: any;
  img: any;
  Saimg: any;

// Variables de control de Syrups (salsas o dulces)

  crema: SYRUP[];
  isCrema: SYRUP;
  syrup: SYRUP[];
  listaSyrups: SYRUP[];
  codSyrup: string;
  flagSyrup: boolean;
  Syimg: any;
  flagCrema = false;

// Variables de control de Toppings

  toppingD: TOPPING[];
  listaToppingD: TOPPING[];
  codToppingD: string;
  Timg: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heladosService: HeladosService,
    private saborService: SaboresService,
    private syrupService: SalsasService,
    private toppingService: ToppingDulceService,
    public dialog: MatDialog,
    private storage: AngularFireStorage,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap((params: Params) => {
        this.cono = cono(params.codigo);
        this.EneFlavorDos = EneFlavorDos(params.codigo);
        this.EneFlavorTres = EneFlavorTres(params.codigo);
        this.flagSyrup = addFlavors(params.codigo);
        return this.heladosService.getHelado(params.codigo);
      })
    )
    .subscribe((product) => {
      this.helado = product.map ( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.img = ref.getDownloadURL();
        return {
          id: e.payload.doc.id,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.img,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          precioVenta: e.payload.doc.data().precioVenta
        };
      });
    });
  }

// Recuperación de la información del servicio
// y asignación de variables para sabor de helado, topping, syrup y crema


  // tslint:disable-next-line:typedef
  fetchToppingD(codigo: string) {
    this.toppingService.getToppingD(codigo).subscribe(data => {
      this.toppingD = data.map ( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.Timg = ref.getDownloadURL();
        return {
          id: e.payload.doc.id,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.Timg,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          precioCompra: e.payload.doc.data().precioCompra
        };
      });
    });
  }

  // tslint:disable-next-line:typedef
  fetchSyrup(codigo: string) {
    this.syrupService.getSyrup(codigo).subscribe(data => {
      this.syrup = data.map ( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.Syimg = ref.getDownloadURL();
        return {
          id: e.payload.doc.id,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.Syimg,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          precioCompra: e.payload.doc.data().precioCompra
        };
      });
    });
  }

  // tslint:disable-next-line:typedef
  fetchSabor(codigo: string) {
    this.saborService.getSabor(codigo).subscribe(data => {
        this.sabor = data.map ( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.Saimg = ref.getDownloadURL();
        return {
          id: e.payload.doc.id,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.Saimg,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          precioCompra: e.payload.doc.data().precioCompra
        };
      });
    });
  }

  // tslint:disable-next-line:typedef
  fetchSabor2(codigo: string) {
    this.saborService.getSabor(codigo).subscribe(data => {
        this.sabor2 = data.map ( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.Saimg = ref.getDownloadURL();
        return {
          id: e.payload.doc.id,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.Saimg,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          precioCompra: e.payload.doc.data().precioCompra
        };
      });
    });
  }

  // tslint:disable-next-line:typedef
  fetchSabor3(codigo: string) {
    this.saborService.getSabor(codigo).subscribe(data => {
        this.sabor3 = data.map ( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.Saimg = ref.getDownloadURL();
        return {
          id: e.payload.doc.id,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.Saimg,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          precioCompra: e.payload.doc.data().precioCompra
        };
      });
    });
  }

  // tslint:disable-next-line:typedef
  addCrema(){
    this.syrupService.getCrema().subscribe(data => {
    this.crema = data.map ( e => {
      return {
          id: e.payload.doc.id,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          precioCompra: e.payload.doc.data().precioCompra,
          precioVenta: e.payload.doc.data().precioVenta
        };
      });
    });
}

// Selectores en Dialogs para sabores, syrups y toppings

  selectFlavor(): void{
    this.sabor = null;
    const dialogRef = this.dialog.open(SaboresContainer, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codflavor = result;
      this.fetchSabor(this.codflavor);
    });
  }

  selectFlavordos(): void{
    this.sabor2 = null;
    const dialogRef = this.dialog.open(SaboresContainer, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codflavor2 = result;
      this.fetchSabor2(this.codflavor2);
    });
  }

  selectFlavortres(): void{
    this.sabor3 = null;
    const dialogRef = this.dialog.open(SaboresContainer, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codflavor3 = result;
      this.fetchSabor3(this.codflavor3);
    });
  }

  aditionSyrup(): void{
    this.syrup = null;
    const dialogRef = this.dialog.open(SyrupsContainer, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codSyrup = result;
      this.fetchSyrup(this.codSyrup);
    });
  }

  aditionToping(): void{
    this.toppingD = null;
    const dialogRef = this.dialog.open(ToppingsContainer, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.codToppingD = result;
      this.fetchToppingD(this.codToppingD);
    });
  }

// asignación de objetos a variables de asignación
// para el nuevo objeto Helado

  // tslint:disable-next-line:typedef
  getSyrups() {

  if (this.syrup != null){
      this.listaSyrups = this.syrup;
    }
    else {
      this.listaSyrups = null;
    }
  return this.listaSyrups;
  }

  // tslint:disable-next-line:typedef
  getCrema(){
    this.addCrema();
    if (this.flagCrema){
      this.isCrema = this.crema[0];
      this.precioHelado = this.helado[0].precioVenta + this.crema[0].precioVenta;
    }
    else {
      this.isCrema = null;
      this.precioHelado = this.helado[0].precioVenta;
    }
  }

  // tslint:disable-next-line:typedef
  getSabores() {
    if (this.sabor2 == null && this.sabor3 == null){
      this.listaSabores = this.sabor;
    }
    else if (this.sabor2 != null && this.sabor3 == null){
      this.listaSabores = [this.sabor[0], this.sabor2[0]];
    }
    else{
      this.listaSabores = [this.sabor[0], this.sabor2[0], this.sabor3[0]];
    }
    return this.listaSabores;
  }

  // tslint:disable-next-line:typedef
  getToppings() {
    if (this.toppingD != null) {
      this.listaToppingD = [this.toppingD[0]];
    }
    else {
      this.listaToppingD = null;
    }
    return this.listaToppingD;
  }

// Agrega el objeto helado a la tienda

  // tslint:disable-next-line:typedef
  addcart() {
    this.getCrema();
    this.getSyrups();
    this.getSabores();
    this.getToppings();
    this.newHelado = {
      codigo: this.helado[0].codigo,
      producto: this.helado[0].producto,
      sabores: this.listaSabores,
      syrups: this.listaSyrups,
      crema: this.isCrema,
      toppingsD: this.listaToppingD,
      precioVenta: this.precioHelado,
      img: this.helado[0].img,
    };
    this.cartService.addCart(this.newHelado);
  }

  // tslint:disable-next-line:typedef
  backClicked() {
    this.location.back();
  }
}
// Función de bandera con booleano para determinar el tipo de helado
// tslint:disable-next-line:typedef
function cono(codigo: string){
  let title: string;
  switch (codigo){
    case 'h0002':
      title = 'Sabores';
      break;
    case 'h0004':
      title = 'Sabores';
      break;
    case 'h0005':
      title = 'Sabores';
      break;
    case 'h0006':
      title = 'Sabores';
      break;
    default:
      title = 'Sabor';
      break;
  }
  return title;
}

// Función de bandera con booleano para habilitar el primer sabor
// tslint:disable-next-line:typedef
function addFlavors(codigo: string){
  let flag: boolean;
  switch (codigo){
    case 'h0001':
      flag = true;
      break;
    case 'h0002':
      flag = true;
      break;
    case 'h0003':
      flag = true;
      break;
    case 'h0004':
      flag = true;
      break;
    case 'h0005':
      flag = true;
      break;
    default:
      flag = false;
      break;
  }
  return flag;
}

// Función de bandera con booleano para habilitar el segundo sabor
// tslint:disable-next-line:typedef
function EneFlavorDos(codigo: string){
  let flag: boolean;
  switch (codigo){
    case 'h0002':
      flag = true;
      break;
    case 'h0004':
      flag = true;
      break;
    case 'h0005':
      flag = true;
      break;
    case 'h0006':
      flag = true;
      break;
    default:
      flag = false;
      break;
  }
  return flag;
}


// Función de bandera con booleano para habilitar el tercer sabor
// tslint:disable-next-line:typedef
function EneFlavorTres(codigo: string){
  let flag: boolean;
  switch (codigo){
    case 'h0005':
      flag = true;
      break;
    case 'h0006':
      flag = true;
      break;
    default:
      flag = false;
      break;
  }
  return flag;
}
