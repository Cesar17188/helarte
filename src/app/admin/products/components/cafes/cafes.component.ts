import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { CafesService } from '@core/services/cafes/cafes.service';

@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.scss']
})
export class CafesComponent implements OnInit {

  cafes = [];
  img: any;
  data: any;
  displayedColumns: string[] = ['codigo', 'cafe', 'precio', 'actions'];

  constructor(
    private cafesService: CafesService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.fetchCafes();
  }

  // tslint:disable-next-line:typedef
  fetchCafes() {
    this.cafesService.getAllCafes().subscribe(data => {
      this.cafes = data.map( e => {
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
  deleteCafe(documentId: string) {
    this.cafesService.deleteCafe(documentId);
  }

}
