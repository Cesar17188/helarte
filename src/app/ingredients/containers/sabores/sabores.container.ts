import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { SABOR } from '@core/models/sabor.model';
import { SaboresService } from '@core/services/sabores/sabores.service';

@Component({
  selector: 'app-sabores',
  templateUrl: './sabores.container.html',
  styleUrls: ['./sabores.container.scss']
})
// tslint:disable-next-line:component-class-suffix
export class SaboresContainer implements OnInit {

  sabores: SABOR[];
  data: any;
  img: any;

  constructor(
    private saboresService: SaboresService,
    private storage: AngularFireStorage,
    ) { }

  ngOnInit(): void {
    this.fetchSabores();
  }
  // Recuperación de los sabores desde el servicio de sabores 'saboresService'
  // tslint:disable-next-line:typedef
  fetchSabores() {
    this.saboresService.getAllSabores().subscribe(data => {
      // Envía los sabores al componente gráfico components/sabores/sabores.component
      this.sabores = data.map( e => {
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
