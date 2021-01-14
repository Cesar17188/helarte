import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { SYRUP } from '@core/models/syrup.model';
import { SalsasService } from '@core/services/salsas/salsas.service';

@Component({
  selector: 'app-syrups',
  templateUrl: './syrups.container.html',
  styleUrls: ['./syrups.container.scss']
})
// tslint:disable-next-line:component-class-suffix
export class SyrupsContainer implements OnInit {

  syrups: SYRUP[];
  data: any;
  img: any;

  constructor(
    private syrupServices: SalsasService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.fetchSyrups();
  }

  // tslint:disable-next-line:typedef
  fetchSyrups() {
    this.syrupServices.getAllSyrups().subscribe(data => {
      this.syrups = data.map( e => {
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
      console.log(this.syrups);
    });
  }

  // tslint:disable-next-line:typedef
  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }
}