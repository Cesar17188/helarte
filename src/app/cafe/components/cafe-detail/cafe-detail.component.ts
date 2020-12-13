import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '@core/models/product.model';

import { CafesService } from '@core/services/cafes/cafes.service';
import { CartService } from '@core/services/cart/cart.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cafe-detail',
  templateUrl: './cafe-detail.component.html',
  styleUrls: ['./cafe-detail.component.scss']
})
export class CafeDetailComponent implements OnInit {

  cafe: Product[];
  newCafe: Product;
  data: any;
  img: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cafesService: CafesService,
    private storage: AngularFireStorage,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap((params: Params) => {
        return this.cafesService.getCafe(params.codigo);
      })
    )
    .subscribe((product) => {
      this.cafe = product.map ( e => {
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


  // tslint:disable-next-line:typedef
  addcart() {
    this.newCafe = {
      codigo: this.cafe[0].codigo,
      producto: this.cafe[0].producto,
      precioVenta: this.cafe[0].precioVenta,
      img: this.cafe[0].img,
    };
    this.cartService.addCart(this.newCafe);
  }

  // tslint:disable-next-line:typedef
  backClicked() {
    this.location.back();
  }

}
