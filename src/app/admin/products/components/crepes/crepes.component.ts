import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { CrepesService } from '@core/services/crepes/crepes.service';

@Component({
  selector: 'app-crepes',
  templateUrl: './crepes.component.html',
  styleUrls: ['./crepes.component.scss']
})
export class CrepesComponent implements OnInit {

  crepes = [];
  img: any;
  data: any;
  displayedColumns: string[] = ['codigo', 'crepe', 'precio', 'actions'];

  constructor(
    private crepeService: CrepesService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.fetchCrepes();
  }

  // tslint:disable-next-line:typedef
  fetchCrepes() {
    this.crepeService.getAllCrepes().subscribe(data => {
      this.crepes = data.map( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.img = ref.getDownloadURL();
        return {
          id: e.payload.doc.data().uid,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          precioVenta: e.payload.doc.data().precioVenta,
          img: this.img,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga
        };
      });
      console.log(this.crepes);
    });
  }

  // tslint:disable-next-line:typedef
  deleteCrepe(documentId: string) {
    this.crepeService.deleteCrepe(documentId);
  }


}
