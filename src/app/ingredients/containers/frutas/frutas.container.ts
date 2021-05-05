import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FRUTA } from '@core/models/fruta.model';
import { FrutasService } from '@core/services/frutas/frutas.service';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.container.html',
  styleUrls: ['./frutas.container.scss']
})
// tslint:disable-next-line:component-class-suffix
export class FrutasContainer implements OnInit {


  frutas: FRUTA[];
  data: any;
  img: any;

  constructor(
    private frutaService: FrutasService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.fetchFrutas();
  }

  // Recuperación de las frutas desde el servicio de frutas 'frutasService'
  // tslint:disable-next-line:typedef
  fetchFrutas() {
    this.frutaService.getAllFrutas().subscribe(data => {
      // Envía las frutas al componente gráfico components/frutas/frutas.component
      this.frutas = data.map( e => {
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
    });
  }

  // tslint:disable-next-line:typedef
  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}
