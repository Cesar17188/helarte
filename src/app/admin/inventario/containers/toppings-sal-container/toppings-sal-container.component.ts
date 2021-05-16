import { Component, OnInit} from '@angular/core';
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
  queso: STOCK;
  salami: STOCK;
  pollo: STOCK;
  jamon: STOCK;
  stockQueso: any[];
  stockSalami: any[];
  stockPollo: any[];
  stockJamon: any[];
  stocks: any[];
  stocksTotal: any[];
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
      this.fetchStockQueso(this.toppings[0].id);
      this.fetchStockSalami(this.toppings[1].id);
      this.fetchStockPollo(this.toppings[2].id);
      this.fetchStockJamon(this.toppings[3].id);
    });
  }

  // tslint:disable-next-line:typedef
  fetchStockQueso(id: string){
    this.inventarioToppingSal.getStock(id)
    .subscribe(data => {
      this.queso = data.map( e => {
        return {
          codigo: e.payload.doc.data().codigo,
          stock: e.payload.doc.data().stock
        };
      });
      this.stockQueso = [Object.assign(this.toppings[0], this.queso)];
    });
  }
    // tslint:disable-next-line:typedef
    fetchStockSalami(id: string){
      this.inventarioToppingSal.getStock(id)
      .subscribe(data => {
        this.salami = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockSalami = [Object.assign(this.toppings[1], this.salami)];
      });
    }
      // tslint:disable-next-line:typedef
  fetchStockPollo(id: string){
    this.inventarioToppingSal.getStock(id)
    .subscribe(data => {
      this.pollo = data.map( e => {
        return {
          codigo: e.payload.doc.data().codigo,
          stock: e.payload.doc.data().stock
        };
      });
      this.stockPollo = [Object.assign(this.toppings[2], this.pollo)];
    });
  }
    // tslint:disable-next-line:typedef
    fetchStockJamon(id: string){
      this.inventarioToppingSal.getStock(id)
      .subscribe(data => {
        this.jamon = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockJamon = [Object.assign(this.toppings[3], this.jamon)];
        this.stocks = this.stockQueso.concat(this.stockSalami, this.stockPollo, this.stockJamon);
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
      });
    }

    // tslint:disable-next-line:typedef
  fetchToppingSalConcat() {
    this.toppingSalService.getAllToppingsS()
    .subscribe(topping => {
      this.toppings = topping.map(e => {
        this.fetchStock(e.payload.doc.id);
        return {
                id: e.payload.doc.id,
                producto: e.payload.doc.data().producto,
                unidadMedida: e.payload.doc.data().unidadMedida
              };
      });
    });
  }

}
