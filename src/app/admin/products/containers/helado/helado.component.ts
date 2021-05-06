import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HELADO } from '@core/models/helado.model';
import { HeladosService } from '@core/services/helados/helados.service';

@Component({
  selector: 'app-helado',
  templateUrl: './helado.component.html',
  styleUrls: ['./helado.component.scss']
})
export class HeladoComponent implements OnInit {

  newHelado = [];
  helado: HELADO;
  img: any;

  constructor(
    private heladoService: HeladosService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.codigo) {
        this.getHelado(params.codigo);
      }
    });
  }

  // tslint:disable-next-line:typedef
  createHelado(data) {
    const helado = data;
    this.heladoService.createHelado(helado).then(resp => {
      this.router.navigate(['./admin/productos']);
    })
    .catch(error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  updateHelado(data) {
    this.heladoService.updateHelado(this.newHelado[0].id, data);
    this.router.navigate(['./admin/productos']);
  }

  // tslint:disable-next-line:typedef
  getHelado(codigo: string) {
    this.heladoService.getHelado(codigo).subscribe(data => {
      this.newHelado = data.map ( e => {
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
      this.helado = this.newHelado[0];
      this.helado.image = this.img;
    });
  }

}
