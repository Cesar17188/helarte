import { Component, OnInit } from '@angular/core';
import { STOCK } from '@core/models/stock.model';
import { TOPPING } from '@core/models/topping.model';
import { InventarioToppingDulceService } from '@core/services/inventario/inventario-topping-dulce/inventario-topping-dulce.service';
import { ToppingDulceService } from '@core/services/topping-dulce/topping-dulce.service';

@Component({
  selector: 'app-toppings-dulce-container',
  templateUrl: './toppings-dulce-container.component.html',
  styleUrls: ['./toppings-dulce-container.component.scss']
})
export class ToppingsDulceContainerComponent implements OnInit {

  toppingd: TOPPING[];
  stock: STOCK;
  oreo: STOCK;
  chipasChocolate: STOCK;
  grajeas: STOCK;
  coco: STOCK;
  granola: STOCK;
  arandanos: STOCK;
  nueces: STOCK;
  almendras: STOCK;
  stockOreo: any[];
  stockChispasChocolate: any[];
  stockGrajeas: any[];
  stockCoco: any[];
  stockGranola: any[];
  stockArandanos: any[];
  stockNueces: any[];
  stockAlmendras: any[];
  stocks: any[];
  stocksTotal: any[];
  constructor(
    private toppingDulceService: ToppingDulceService,
    private inventarioToppingDulce: InventarioToppingDulceService
  ) { }

  ngOnInit(): void {
    this.fetchToppingSal();
  }


  // tslint:disable-next-line:typedef
  fetchToppingSal() {
    this.toppingDulceService.getAllToppingD()
    .subscribe(data => {
      this.toppingd = data.map( e => {
        return {
          id: e.payload.doc.id,
          producto: e.payload.doc.data().producto,
          unidadMedida: e.payload.doc.data().unidadMedida
        };
      });
      this.fetchStockOreo(this.toppingd[0].id);
      this.fetchStockChispasChocolate(this.toppingd[1].id);
      this.fetchStockGrajeas(this.toppingd[2].id);
      this.fetchStockCoco(this.toppingd[3].id);
      this.fetchStockGranola(this.toppingd[4].id);
      this.fetchStockArandanos(this.toppingd[5].id);
      this.fetchStockNueces(this.toppingd[6].id);
      this.fetchStockAlmendras(this.toppingd[7].id);
    });
  }

  // tslint:disable-next-line:typedef
  fetchStockOreo(id: string){
    this.inventarioToppingDulce.getStock(id)
    .subscribe(data => {
      this.oreo = data.map( e => {
        return {
          codigo: e.payload.doc.data().codigo,
          stock: e.payload.doc.data().stock
        };
      });
      this.stockOreo = [Object.assign(this.toppingd[0], this.oreo)];
    });
  }
    // tslint:disable-next-line:typedef
    fetchStockChispasChocolate(id: string){
      this.inventarioToppingDulce.getStock(id)
      .subscribe(data => {
        this.chipasChocolate = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockChispasChocolate = [Object.assign(this.toppingd[1], this.chipasChocolate)];
      });
    }
      // tslint:disable-next-line:typedef
  fetchStockGrajeas(id: string){
    this.inventarioToppingDulce.getStock(id)
    .subscribe(data => {
      this.grajeas = data.map( e => {
        return {
          codigo: e.payload.doc.data().codigo,
          stock: e.payload.doc.data().stock
        };
      });
      this.stockGrajeas = [Object.assign(this.toppingd[2], this.grajeas)];
    });
  }
    // tslint:disable-next-line:typedef
    fetchStockCoco(id: string){
      this.inventarioToppingDulce.getStock(id)
      .subscribe(data => {
        this.coco = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockCoco = [Object.assign(this.toppingd[3], this.coco)];
      });
    }

    // tslint:disable-next-line:typedef
    fetchStockGranola(id: string){
      this.inventarioToppingDulce.getStock(id)
      .subscribe(data => {
        this.granola = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockGranola = [Object.assign(this.toppingd[4], this.granola)];
      });
    }

    // tslint:disable-next-line:typedef
    fetchStockArandanos(id: string){
      this.inventarioToppingDulce.getStock(id)
      .subscribe(data => {
        this.arandanos = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockArandanos = [Object.assign(this.toppingd[5], this.arandanos)];
      });
    }

    // tslint:disable-next-line:typedef
    fetchStockNueces(id: string){
      this.inventarioToppingDulce.getStock(id)
      .subscribe(data => {
        this.nueces = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockNueces = [Object.assign(this.toppingd[6], this.nueces)];
      });
    }

    // tslint:disable-next-line:typedef
    fetchStockAlmendras(id: string){
      this.inventarioToppingDulce.getStock(id)
      .subscribe(data => {
        this.almendras = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockAlmendras = [Object.assign(this.toppingd[7], this.almendras)];
        this.stocks = this.stockOreo.concat(this.stockChispasChocolate, this.stockGrajeas, this.stockCoco,
                                            this.stockGranola, this.stockArandanos, this.stockNueces, this.stockAlmendras);
        console.log(this.stocks);
      });
    }

}
