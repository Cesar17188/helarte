import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Product } from '@core/models/product.model';
import { CrepesService } from '@core/services/crepes/crepes.service';


@Component({
  selector: 'app-crepesproducts',
  templateUrl: './crepesproducts.container.html',
  styleUrls: ['./crepesproducts.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class CrepesproductsContainer implements OnInit {

  crepes: Product[];
  data: any;
  img: any;

  constructor(
    private crepesService: CrepesService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.fetchCrepes();
  }

  // tslint:disable-next-line: typedef
  fetchCrepes() {
    this.crepesService.getAllCrepes().subscribe(data => {
      this.crepes = data.map( e => {
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
      console.log(this.crepes);
    });
  }


  // tslint:disable-next-line: typedef
  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}
