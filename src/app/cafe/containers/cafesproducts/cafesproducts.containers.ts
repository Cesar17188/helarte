import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Product } from '@core/models/product.model';
import { CafesService } from '@core/services/cafes/cafes.service';

@Component({
  selector: 'app-cafesproducts',
  templateUrl: './cafesproducts.containers.html',
  styleUrls: ['./cafesproducts.containers.scss']
})
// tslint:disable-next-line:component-class-suffix
export class CafesproductsContainer implements OnInit {

  cafes: Product[];
  data: any;
  img: any;

  constructor(
    private cafesService: CafesService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.fetchCafes();
  }

  // tslint:disable-next-line:typedef
  fetchCafes() {
    this.cafesService.getAllCafes().subscribe(data => {
      this.cafes = data.map( e => {
        // tslint:disable-next-line: no-string-literal
        const ref = this.storage.storage.refFromURL(e.payload.doc.data()['image']);
        this.img = ref.getDownloadURL();
        return {
          // tslint:disable-next-line: no-string-literal
          codigo: e.payload.doc.data()['codigo'],
          // tslint:disable-next-line: no-string-literal
          producto: e.payload.doc.data()['producto'],
          img: this.img,
          // tslint:disable-next-line: no-string-literal
          descripcion_corta: e.payload.doc.data()['descripcion_corta'],
          // tslint:disable-next-line: no-string-literal
          descripcion_larga: e.payload.doc.data()['descripcion_larga']
        };
      });
    });
  }


  // tslint:disable-next-line:typedef
  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}
