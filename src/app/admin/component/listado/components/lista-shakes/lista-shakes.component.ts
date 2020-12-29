import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ShakesService } from '@core/services/shakes/shakes.service';

@Component({
  selector: 'app-lista-shakes',
  templateUrl: './lista-shakes.component.html',
  styleUrls: ['./lista-shakes.component.scss']
})
export class ListaShakesComponent implements OnInit {

  shakes = [];
  img: any;
  data: any;
  displayedColumns: string[] = ['codigo', 'shake', 'precio', 'actions'];

  constructor(
    private shakesService: ShakesService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.fetchShakes();
  }

  // tslint:disable-next-line:typedef
  fetchShakes() {
    this.shakesService.getAllShakes().subscribe(data => {
      this.shakes = data.map( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.img = ref.getDownloadURL();
        return {
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          precioVenta: e.payload.doc.data().precioVenta,
          img: this.img,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga
        };
      });
      console.log(this.shakes);
    });
  }

  // tslint:disable-next-line:typedef
  deleteShake(documentId: string) {
    this.shakesService.deleteShake(documentId);
  }

}
