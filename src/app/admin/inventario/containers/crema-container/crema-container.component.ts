import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { STOCK } from '@core/models/stock.model';
import { SYRUP } from '@core/models/syrup.model';
import { SalsasService } from '@core/services/salsas/salsas.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-crema-container',
  templateUrl: './crema-container.component.html',
  styleUrls: ['./crema-container.component.scss']
})
export class CremaContainerComponent implements OnInit {

  listaCrema: SYRUP[];
  stock: STOCK;
  img: any;
  crema: SYRUP;
  stockCrema: any[];
  stocks: any[];
  stocksTotal: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cremaService: SalsasService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.fetchCrema();
  }

  // tslint:disable-next-line:typedef
  createCrema(data) {
    const crema = data;
    this.cremaService.createSyrup(crema).then(resp => {
      console.log(resp);
      this.router.navigate(['./admin/inventario']);
    })
    .catch(err => {
      console.log(err);
    });
  }

  // tslint:disable-next-line:typedef
  updateCrema(data) {
    this.cremaService.updateSyrup(this.listaCrema[0].id, data);
    this.router.navigate(['./admin/inventario']);
  }
  // tslint:disable-next-line:typedef
  fetchCrema() {
    this.cremaService.getCrema()
    .subscribe(data => {
      this.listaCrema = data.map( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.img = ref.getDownloadURL();
        return {
          id: e.payload.doc.id,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          unidadMedida: e.payload.doc.data().unidadMedida
        };
      });
      this.crema = this.listaCrema[0];
      this.crema.image = this.img;
    });
  }


}
