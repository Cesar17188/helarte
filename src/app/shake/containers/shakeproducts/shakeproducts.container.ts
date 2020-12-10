import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Product } from '@core/models/product.model';
import { ShakesService } from '@core/services/shakes/shakes.service';

@Component({
  selector: 'app-shakeproducts',
  templateUrl: './shakeproducts.container.html',
  styleUrls: ['./shakeproducts.container.scss']
})
// tslint:disable-next-line:component-class-suffix
export class ShakeproductsContainer implements OnInit {

  shakes: Product[];
  data: any;
  img: any;

  constructor(
    private shakesService: ShakesService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.fetchShakes();
  }

  // tslint:disable-next-line:typedef
  fetchShakes() {
    this.shakesService.getAllShakes().subscribe(data => {
      this.shakes = data.map( e => {
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
      console.log(this.shakes);
    });
  }


  // tslint:disable-next-line:typedef
  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }
}
