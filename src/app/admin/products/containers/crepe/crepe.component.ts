import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CREPE } from '@core/models/crepe.model';
import { CrepesService } from '@core/services/crepes/crepes.service';

@Component({
  selector: 'app-crepe',
  templateUrl: './crepe.component.html',
  styleUrls: ['./crepe.component.scss']
})
export class CrepeComponent implements OnInit {

  newCrepe = [];
  crepe: CREPE;
  img: any;

  constructor(
    private crepeService: CrepesService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.codigo) {
        this.getCrepe(params.codigo);
      }
    });
  }

  // tslint:disable-next-line:typedef
  createCrepe(data) {
    const crepe = data;
    this.crepeService.createCrepe(crepe).then(resp => {
      this.router.navigate(['./admin/productos']);
    })
    .catch(error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  updateCrepe(data) {
    this.crepeService.updateCrepe(this.newCrepe[0].id, data);
    this.router.navigate(['./admin/productos']);
  }

  // tslint:disable-next-line:typedef
  getCrepe(codigo: string) {
    this.crepeService.getCrepe(codigo).subscribe(data => {
      this.newCrepe = data.map ( e => {
        const ref = this.storage.storage.refFromURL(e.payload.doc.data().image);
        this.img = ref.getDownloadURL();
        return {
          id: e.payload.doc.id,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.img,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga,
          precioVenta: e.payload.doc.data().precioVenta
        };
      });
      this.crepe = this.newCrepe[0];
      this.crepe.image = this.img;
    });
  }

}
