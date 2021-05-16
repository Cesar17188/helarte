import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { HeladosService } from '@core/services/helados/helados.service';

@Component({
  selector: 'app-helados',
  templateUrl: './helados.component.html',
  styleUrls: ['./helados.component.scss']
})
export class HeladosComponent implements OnInit {

  helados = [];
  img: any;
  data: any;
  displayedColumns: string[] = ['codigo', 'helado', 'precio', 'actions'];
  uid;

  constructor(
    private heladosService: HeladosService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.fetchHelados();
  }

  // tslint:disable-next-line:typedef
  fetchHelados() {
    this.heladosService.getHelados().subscribe(data => {
      this.helados = data.map( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.img = ref.getDownloadURL();
        return {
          id: e.payload.doc.id,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          precioVenta: e.payload.doc.data().precioVenta,
          img: this.img,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga
        };
      });
    });
  }

  // tslint:disable-next-line:typedef
  deleteHelado(documentId: string) {
    this.heladosService.deleteHelado(documentId);
  }


}
