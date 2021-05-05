import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Product } from '@core/models/product.model';
import { ArepasService } from '@core/services/arepas/arepas.service';

@Component({
  selector: 'app-arepasproducts',
  templateUrl: './arepasproducts.component.html',
  styleUrls: ['./arepasproducts.component.scss']
})
export class ArepasproductsComponent implements OnInit {

  arepas: Product[];
  data: any;
  img: any;

  constructor(
    private arepasService: ArepasService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.fetchArepas();
  }

  // tslint:disable-next-line:typedef
  fetchArepas() {
    this.arepasService.getAllArepas().subscribe(data => {
      this.arepas = data.map( e => {
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
