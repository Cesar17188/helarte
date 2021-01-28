import { Component, OnInit } from '@angular/core';
import { STOCK } from '@core/models/stock.model';
import { TOPPING } from '@core/models/topping.model';
import { InventarioToppingSalService } from '@core/services/inventario/inventario-topping-sal/inventario-topping-sal.service';
import { ToppingSalService } from '@core/services/topping-sal/topping-sal.service';

@Component({
  selector: 'app-toppings-sal-container',
  templateUrl: './toppings-sal-container.component.html',
  styleUrls: ['./toppings-sal-container.component.scss']
})
export class ToppingsSalContainerComponent implements OnInit {

  toppings: TOPPING[];
  stock: STOCK;
  stocks: STOCK[];
  constructor(
    private toppingSalService: ToppingSalService,
    private inventarioToppingSal: InventarioToppingSalService
  ) { }

  ngOnInit(): void {
    this.fetchToppingSal();
  }

  // tslint:disable-next-line:typedef
  fetchToppingSal() {
    this.toppingSalService.getAllToppingsS()
    .subscribe(data => {
      this.toppings = data.map( e => {
        return {
          id: e.payload.doc.id,
          producto: e.payload.doc.data().producto,
          unidadMedida: e.payload.doc.data().unidadMedida
        };
      });
      console.log(this.toppings);
      this.toppings.forEach(topping =>
         this.fetchStock(topping.id)
        );
      console.log(this.stocks);
    });
  }

  // tslint:disable-next-line:typedef
  fetchStock(id: string){
    this.inventarioToppingSal.getStock(id)
    .subscribe(data => {
      this.stock = data.map( e => {
        return {
          codigo: e.payload.doc.data().codigo,
          stock: e.payload.doc.data().stock
        };
      });
      console.log(this.stock);
    });
  }

}
