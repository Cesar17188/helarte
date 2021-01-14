import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { SHAKE } from '@core/models/shake.model';
import { ShakesService } from '@core/services/shakes/shakes.service';

@Component({
  selector: 'app-shake',
  templateUrl: './shake.component.html',
  styleUrls: ['./shake.component.scss']
})
export class ShakeComponent implements OnInit {

  newShake = [];
  shake: SHAKE;
  img: any;

  constructor(
    private shakeService: ShakesService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.codigo) {
        console.log(params.codigo);
        this.getShake(params.codigo);
      }
    });
  }

  // tslint:disable-next-line:typedef
  createShake(data) {
    const shake = data;
    this.shakeService.createShake(shake).then(resp => {
      console.log(resp);
      this.router.navigate(['./admin/productos']);
    })
    .catch(error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  updateShake(data) {
    console.log(data);
    this.shakeService.updateShake(this.newShake[0].id, data);
    this.router.navigate(['./admin/productos']);
  }

  // tslint:disable-next-line:typedef
  getShake(codigo: string) {
    this.shakeService.getShake(codigo).subscribe(data => {
      this.newShake = data.map ( e => {
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
      this.shake = this.newShake[0];
      this.shake.image = this.img;
      console.log(this.newShake[0]);
    });
  }

}
