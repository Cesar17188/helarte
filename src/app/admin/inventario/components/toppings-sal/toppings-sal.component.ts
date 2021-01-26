import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { STOCK } from '@core/models/stock.model';
import { TOPPING } from '@core/models/topping.model';
import { ToppingsSalService } from '@core/services/inventario/toppingsSal/toppings-sal.service';
import { ToppingSalService } from '@core/services/topping-sal/topping-sal.service';

@Component({
  selector: 'app-toppings-sal',
  templateUrl: './toppings-sal.component.html',
  styleUrls: ['./toppings-sal.component.scss']
})
export class ToppingsSalComponent implements OnInit {

  inventario = [];
  toppingsS: TOPPING[];
  ItoppingS4: STOCK[];
  img: any;

  constructor(
    private iToppingSalService: ToppingsSalService,
  ) { }

  ngOnInit(): void {
    // this.fetchToppings();
    // this.getInventario4();
  }

  // // tslint:disable-next-line:typedef
  // fetchToppings() {
  //   this.iToppingSalService.getAllStocks()
  //   .subscribe(data => {
  //     this.toppingsS = data.documents.map (e => {
  //       return {
  //         codigo: e.fields.codigo.stringValue,
  //         producto: e.fields.producto.stringValue,
  //         descripcion_corta: e.fields.descripcion_corta.stringValue,
  //         descripcion_larga: e.fields.descripcion_larga.stringValue
  //       };
  //     });
  //     console.log(this.toppingsS);
  //   });
  // }

  // // tslint:disable-next-line:typedef
  // getInventario4() {
  //   this.iToppingSalService.getStock()
  //   .subscribe(data => {
  //     this.ItoppingS4 = data.documents.map(e => {
  //       return {
  //         codigo: e.fields.codigo.stringValue,
  //         stock: JSON.parse(JSON.stringify(e.fields.stock.integerValue))
  //       };
  //     });
  //     console.log(this.ItoppingS4);
  //   });
  // }

}
