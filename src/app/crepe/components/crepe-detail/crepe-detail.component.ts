import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';

import { ToppingDulceService } from '@core/services/topping-dulce/topping-dulce.service';
import { CrepesService } from '@core/services/crepes/crepes.service';
import { SalsasService } from '@core/services/salsas/salsas.service';
import { SaboresService } from '@core/services/sabores/sabores.service';
import { FrutasService } from '@core/services/frutas/frutas.service';
import { ToppingSalService } from '@core/services/topping-sal/topping-sal.service';
import { CartService } from '@core/services/cart/cart.service';

import { ToppingsContainer } from '@ingredients/containers/toppings/toppings.container';
import { SyrupsContainer } from '@ingredients/containers/syrups/syrups.container';
import { SaboresContainer } from '@ingredients/containers/sabores/sabores.container';
import { FrutasContainer } from '@ingredients/containers/frutas/frutas.container';
import { ToppingsSalContainer } from '@ingredients/containers/toppings-sal/toppings-sal.container';

import { Product } from '@core/models/product.model';
import { TOPPING } from '@core/models/topping.model';
import { SYRUP } from '@core/models/syrup.model';
import { SABOR } from '@core/models/sabor.model';
import { FRUTA } from '@core/models/fruta.model';

@Component({
  selector: 'app-crepe-detail',
  templateUrl: './crepe-detail.component.html',
  styleUrls: ['./crepe-detail.component.scss']
})
export class CrepeDetailComponent implements OnInit {

  // Variables de control de Crepe
  newCrepe: Product;
  crepeDulce: boolean;
  crepe: Product[];
  data: any;
  img: any;

  // Variables de control de Toppings Dulce y sal
  Timg: any;
  toppingD: TOPPING[];
  codToppingD: string;
  Tsimg: any;
  listaToppingsD: TOPPING[];
  toppingS: TOPPING[];
  codToppingS: string;
  toppingS2: TOPPING[];
  codToppingS2: string;
  toppingS3: TOPPING[];
  codToppingS3: string;
  listaToppingsS: TOPPING[];

  // Variables de control de syrups
  codSyrup: string;
  syrup: SYRUP[];
  Syimg: any;
  listaSyrups: SYRUP[];

  // Variables de control de sabor de helado
  sabor: SABOR[];
  saborExtra: SABOR[];
  listaSabores: SABOR[];
  Saimg: any;
  Saimgex: any;
  codflavor: string;
  codflavorex: string;

  // Vairables de control de fruta
  frutas: FRUTA[];
  frimg: any;
  codfruta: string;
  listaFrutas: FRUTA[];

  // Variables de control de crema
  crema: SYRUP[];
  isCrema: SYRUP;
  flagCrema = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private crepesService: CrepesService,
    private saborService: SaboresService,
    private frutasService: FrutasService,
    private storage: AngularFireStorage,
    private toppingDulceService: ToppingDulceService,
    private toppingSalService: ToppingSalService,
    private syrupService: SalsasService,
    public dialog: MatDialog,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap((params: Params) => {
        this.crepeDulce = dulceSal(params.codigo);
        return this.crepesService.getCrepe(params.codigo);
      })
    )
    .subscribe((product) => {
      this.crepe = product.map ( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.img = ref.getDownloadURL();
        return {
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
  console.log(this.sabor);
}

selectFlavor(): void{
  this.sabor = null;
  const dialogRef = this.dialog.open(SaboresContainer, {
    width: '50%',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.codflavor = result;
    this.fetchSabor(this.codflavor);
    console.log(this.sabor);
  });
}

// tslint:disable-next-line:typedef
fetchSaborAdicional(codigo: string) {
  this.saborService.getSabor(codigo).subscribe(data => {
      this.saborExtra = data.map ( e => {
      const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
      this.Saimgex = ref.getDownloadURL();
      return {
        id: e.payload.doc.id,
        codigo: e.payload.doc.data().codigo,
        producto: e.payload.doc.data().producto,
        img: this.Saimgex,
        descripcion_corta: e.payload.doc.data().descripcion_corta,
        descripcion_larga: e.payload.doc.data().descripcion_larga,
        precioCompra: e.payload.doc.data().precioCompra
      };
    });
  });
  console.log(this.saborExtra);
}

selectFlavorAdicional(): void{
  this.saborExtra = null;
  const dialogRef = this.dialog.open(SaboresContainer, {
    width: '50%',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.codflavorex = result;
    this.fetchSaborAdicional(this.codflavorex);
    console.log(this.saborExtra);
  });
}

// tslint:disable-next-line:typedef
fetchToppingD(codigo: string) {
  this.toppingDulceService.getToppingD(codigo).subscribe(data => {
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
        preciocompra: e.payload.doc.data().precioCompra
      };
    });
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

// tslint:disable-next-line:typedef
fetchToppingS(codigo: string){
  this.toppingSalService.getToppingS(codigo).subscribe(data => {
    this.toppingS = data.map ( e => {
      const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
      this.Timg = ref.getDownloadURL();
      return {
        id: e.payload.doc.id,
        codigo: e.payload.doc.data().codigo,
        producto: e.payload.doc.data().producto,
        img: this.Timg,
        descripcion_corta: e.payload.doc.data().descripcion_corta,
        descripcion_larga: e.payload.doc.data().descripcion_larga,
        preciocompra: e.payload.doc.data().precioCompra
      };
    });
  });
}

// Selectores en Dialogs para sabores, syrups y toppings

aditionTopingSal(): void{
  this.toppingS = null;
  const dialogRef = this.dialog.open(ToppingsSalContainer, {
    width: '50%',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.codToppingS = result;
    this.fetchToppingS(this.codToppingS);
  });
}

// tslint:disable-next-line:typedef
fetchToppingS2(codigo: string){
  this.toppingSalService.getToppingS(codigo).subscribe(data => {
    this.toppingS2 = data.map ( e => {
      const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
      this.Timg = ref.getDownloadURL();
      return {
        id: e.payload.doc.id,
        codigo: e.payload.doc.data().codigo,
        producto: e.payload.doc.data().producto,
        img: this.Timg,
        descripcion_corta: e.payload.doc.data().descripcion_corta,
        descripcion_larga: e.payload.doc.data().descripcion_larga,
        preciocompra: e.payload.doc.data().precioCompra
      };
    });
  });
}

aditionTopingSal2(): void{
  this.toppingS2 = null;
  const dialogRef = this.dialog.open(ToppingsSalContainer, {
    width: '50%',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.codToppingS2 = result;
    this.fetchToppingS2(this.codToppingS2);
  });
}

// tslint:disable-next-line:typedef
fetchToppingS3(codigo: string){
  this.toppingSalService.getToppingS(codigo).subscribe(data => {
    this.toppingS3 = data.map ( e => {
      const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
      this.Timg = ref.getDownloadURL();
      return {
        id: e.payload.doc.id,
        codigo: e.payload.doc.data().codigo,
        producto: e.payload.doc.data().producto,
        img: this.Timg,
        descripcion_corta: e.payload.doc.data().descripcion_corta,
        descripcion_larga: e.payload.doc.data().descripcion_larga,
        preciocompra: e.payload.doc.data().precioCompra
      };
    });
  });
}

aditionTopingSal3(): void{
  this.toppingS3 = null;
  const dialogRef = this.dialog.open(ToppingsSalContainer, {
    width: '50%',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.codToppingS3 = result;
    this.fetchToppingS3(this.codToppingS3);
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

// tslint:disable-next-line:typedef
fetchFruta(codigo: string) {
  this.frutasService.getFruta(codigo).subscribe(data => {
    this.frutas = data.map ( e => {
      const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
      this.frimg = ref.getDownloadURL();
      return {
        id: e.payload.doc.id,
        codigo: e.payload.doc.data().codigo,
        producto: e.payload.doc.data().producto,
        img: this.frimg,
        descripcion_corta: e.payload.doc.data().descripcion_corta,
        descripcion_larga: e.payload.doc.data().descripcion_larga,
        precioCompra: e.payload.doc.data().precioCompra
      };
    });
  });
}

aditionFruta(): void{
  this.frutas = null;
  const dialogRef = this.dialog.open(FrutasContainer, {
    width: '50%',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.codfruta = result;
    this.fetchFruta(this.codfruta);
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
  console.log(this.crema);
  });
}

// asignación de objetos a variables de asignación
// para el nuevo objeto Helado

// tslint:disable-next-line:typedef
getCrema(){
    this.addCrema();
    if (this.flagCrema){
      this.isCrema = this.crema[0];

    }
    else {
      this.isCrema = null;
    }
}

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
  getSabores() {
    if (this.sabor != null && this.saborExtra == null){
      this.listaSabores = this.sabor;
    } else if (this.sabor != null && this.saborExtra != null) {
      this.listaSabores = [this.sabor[0], this.saborExtra[0]];
      this.crepe[0].precioVenta = this.crepe[0].precioVenta + 1;
    }
    else {
      this.listaSabores = null;
    }
    return this.listaSabores;
  }

  // tslint:disable-next-line:typedef
  getToppingsD() {
    if (this.toppingD != null) {
      this.listaToppingsD = [this.toppingD[0]];
    }
    else {
      this.listaToppingsD = null;
    }
  }

  // tslint:disable-next-line:typedef
  getFrutas() {
    if (this.frutas != null) {
      this.listaFrutas = this.frutas;
    }
    else {
      this.listaFrutas = null;
    }
    return this.listaFrutas;
  }

  // tslint:disable-next-line:typedef
  getToppingsS() {
    if (this.toppingS2 == null && this.toppingS3 == null){
      this.listaToppingsS = this.toppingS;
    }
    else if (this.toppingS2 != null && this.toppingS3 == null){
      this.listaToppingsS = [this.toppingS[0], this.toppingS2[0]];
    }
    else{
      this.listaToppingsS = [this.toppingS[0], this.toppingS2[0], this.toppingS3[0]];
    }
    return this.listaToppingsS;
  }

// Agrega el objeto crepe a la tienda

  // tslint:disable-next-line:typedef
  addcart() {
    this.getCrema();
    this.getSyrups();
    this.getSabores();
    this.getToppingsD();
    this.getToppingsS();
    this.getFrutas();
    this.newCrepe = {
      codigo: this.crepe[0].codigo,
      producto: this.crepe[0].producto,
      sabores: this.listaSabores,
      syrups: this.listaSyrups,
      crema: this.isCrema,
      toppingsD: this.listaToppingsD,
      toppingsS: this.listaToppingsS,
      frutas: this.listaFrutas,
      precioVenta: this.crepe[0].precioVenta,
      img: this.crepe[0].img,
    };
    this.cartService.addCart(this.newCrepe);
  }


// tslint:disable-next-line:typedef
backClicked() {
  this.location.back();
}

}

// Función de bandera con booleano para determinar el tipo de crepe
// tslint:disable-next-line:typedef
function dulceSal(codigo: string){
if (codigo === 'cp0001' || codigo === 'cp0003'){
  return true;
} else {
  return false;
}
}

