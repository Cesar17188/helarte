import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ArepasService } from '@core/services/arepas/arepas.service';

@Component({
  selector: 'app-arepas',
  templateUrl: './arepas.component.html',
  styleUrls: ['./arepas.component.scss']
})
export class ArepasComponent implements OnInit {

  arepas = [];
  img: any;
  data: any;
  displayedColumns: string[] = ['codigo', 'arepa', 'precio', 'actions'];

  constructor(
    private arepasService: ArepasService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.fetchArepas();
  }

  // tslint:disable-next-line:typedef
  fetchArepas() {
    this.arepasService.getAllArepas().subscribe(data => {
      this.arepas = data.map( e => {
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
  deleteArepa(documentId: string) {
    this.arepasService.deleteArepa(documentId);
  }
}
