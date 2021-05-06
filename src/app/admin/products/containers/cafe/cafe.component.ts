import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Product } from '@core/models/product.model';
import { CafesService } from '@core/services/cafes/cafes.service';



@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss']
})
export class CafeComponent implements OnInit {

  newCafe = [];
  cafe: Product;
  img: any;

  constructor(
    private cafeService: CafesService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.codigo) {
        this.getCafe(params.codigo);
      }
    });
  }

  // tslint:disable-next-line:typedef
  createCafe(data) {
    const crepe = data;
    this.cafeService.createCafe(crepe).then(resp => {
      this.router.navigate(['./admin/productos']);
    })
    .catch(error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  updateCafe(data) {
    this.cafeService.updateCafe(this.newCafe[0].id, data);
    this.router.navigate(['./admin/productos']);
  }

  // tslint:disable-next-line:typedef
  getCafe(codigo: string) {
    this.cafeService.getCafe(codigo).subscribe(data => {
      this.newCafe = data.map ( e => {
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
      this.cafe = this.newCafe[0];
      this.cafe.image = this.img;
    });
  }

}

