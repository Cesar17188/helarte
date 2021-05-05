import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '@core/models/product.model';
import { ArepasService } from '@core/services/arepas/arepas.service';
import { CartService } from '@core/services/cart/cart.service';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { TOPPING } from '@core/models/topping.model';
import { ToppingSalService } from '@core/services/topping-sal/topping-sal.service';

@Component({
  selector: 'app-arepas-detail',
  templateUrl: './arepas-detail.component.html',
  styleUrls: ['./arepas-detail.component.scss']
})
export class ArepasDetailComponent implements OnInit {

  arepa: Product[];
  newArepa: Product;
  flagCombo = false;
  data: any;
  img: any;
  toppingPollo: TOPPING[];
  polloId = 'tps0003';
  toppingCarne: TOPPING[];
  carneId = 'tps0002';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private arepasService: ArepasService,
    private storage: AngularFireStorage,
    private cartService: CartService,
    private toppingSalService: ToppingSalService
  ) {
    this.fetchPollo(this.polloId);
    this.fetchCarne(this.carneId);
  }

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap((params: Params) => {
        return this.arepasService.getArepa(params.codigo);
      })
    )
    .subscribe((product) => {
      this.arepa = product.map ( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.img = ref.getDownloadURL();
        return {
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.img,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          precioVenta: e.payload.doc.data().precioVenta,
        };
      });
    });
  }

  // tslint:disable-next-line:typedef
  fetchPollo(idPollo: string){
    this.toppingSalService.getToppingS(idPollo).subscribe(data => {
      this.toppingPollo = data.map ( e => {
        return {
          id: e.payload.doc.id,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          preciocompra: e.payload.doc.data().precioCompra
        };
      });
    });
  }

  // tslint:disable-next-line:typedef
  fetchCarne(idCarne: string){
    this.toppingSalService.getToppingS(idCarne).subscribe(data => {
      this.toppingCarne = data.map ( e => {
        return {
          id: e.payload.doc.id,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          preciocompra: e.payload.doc.data().precioCompra
        };
      });
    });
  }

  // tslint:disable-next-line:typedef
  addcart() {
    let precio = 0;
    let productoCombo = '';
    // tslint:disable-next-line:prefer-const
    let toppingS: TOPPING[];
    if (this.flagCombo){
      precio = this.arepa[0].precioVenta + 0.15;
      productoCombo = this.arepa[0].producto + ' en combo';
    } else {
      precio = this.arepa[0].precioVenta;
      productoCombo = this.arepa[0].producto;
    }
    if (this.arepa[0].producto === 'Arepa de pollo') {
      toppingS = this.toppingPollo;
    }
    else {
      toppingS = this.toppingCarne;
    }
    this.newArepa = {
      codigo: this.arepa[0].codigo,
      producto: productoCombo,
      precioVenta: precio,
      toppingsS: toppingS,
      img: this.arepa[0].img,
    };
    this.cartService.addCart(this.newArepa);
  }

  // tslint:disable-next-line:typedef
  backClicked() {
    this.location.back();
  }
}
