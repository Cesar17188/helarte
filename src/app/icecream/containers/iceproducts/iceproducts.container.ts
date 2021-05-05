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

  // Recuperación de los helados desde el servicio de helados 'heladosService'
  // tslint:disable-next-line: typedef
  fetchHelados() {
    this.heladosService.getHelados().subscribe(data => {
      // Envía los helados al componente gráfico components/helados/helados.component
      this.helados = data.map( e => {
        // tslint:disable-next-line: no-string-literal
        const ref = this.storage.storage.refFromURL(e.payload.doc.data()['image']);
        this.img = ref.getDownloadURL();
        return {
          id: e.payload.doc.id,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.img,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga
        };
      });
      // console.log(this.helados);
    });
  }

  // tslint:disable-next-line: typedef
  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}
