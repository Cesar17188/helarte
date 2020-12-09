import { Component, OnInit } from '@angular/core';
import { HELADO } from '@core/models/helado.model';
import { HeladosService } from '@core/services/helados/helados.service';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-iceproducts',
  templateUrl: './iceproducts.container.html',
  styleUrls: ['./iceproducts.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class IceproductsContainer implements OnInit {

  helados: HELADO[];
  data: any;
  img: any;

  constructor(
    private heladosService: HeladosService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.fetchHelados();
  }

  // tslint:disable-next-line: typedef
  fetchHelados() {
    this.heladosService.getHelados().subscribe(data => {
      this.helados = data.map( e => {
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
      console.log(this.helados);
    });
  }

  // tslint:disable-next-line: typedef
  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}
