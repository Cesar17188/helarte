import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product.model';
import { ArepasService } from '@core/services/arepas/arepas.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-arepa',
  templateUrl: './arepa.component.html',
  styleUrls: ['./arepa.component.scss']
})
export class ArepaComponent implements OnInit {

  newArepa = [];
  arepa: Product;
  img: any;

  constructor(
    private arepaService: ArepasService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.codigo) {
        this.fetchArepa(params.codigo);
      }
    });
  }

  // tslint:disable-next-line:typedef
  createArepa(data) {
    const arepa = data;
    this.arepaService.createArepa(arepa).then(resp => {
      this.router.navigate(['./admin/productos']);
    })
    .catch(error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  updateArepa(data) {
    this.arepaService.updateArepa(this.newArepa[0].id, data);
    this.router.navigate(['./admin/productos']);
  }


  // tslint:disable-next-line:typedef
  fetchArepa(codigo: string) {
    this.arepaService.getArepa(codigo).subscribe(data => {
      this.newArepa = data.map ( e => {
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
      this.arepa = this.newArepa[0];
      this.arepa.image = this.img;
    });
  }

}
