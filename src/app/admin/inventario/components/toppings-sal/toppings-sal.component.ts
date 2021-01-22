import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ToppingsSalService } from '@core/services/inventario/toppingsSal/toppings-sal.service';

@Component({
  selector: 'app-toppings-sal',
  templateUrl: './toppings-sal.component.html',
  styleUrls: ['./toppings-sal.component.scss']
})
export class ToppingsSalComponent implements OnInit {

  inventario = [];
  img: any;

  constructor(
    private iToppingSalService: ToppingsSalService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.fetchIToppingsSal();
  }

  // tslint:disable-next-line:typedef
  fetchIToppingsSal() {
    this.iToppingSalService.getAllStocks().subscribe(data => {
      this.inventario = data.map( e => {
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
      console.log(this.inventario);
    });
  }

}
