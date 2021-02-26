import { Component, OnInit } from '@angular/core';
import { STOCK } from '@core/models/stock.model';
import { SYRUP } from '@core/models/syrup.model';
import { InventarioSyrupsService } from '@core/services/inventario/inventario-syrups/inventario-syrups.service';
import { SalsasService } from '@core/services/salsas/salsas.service';

@Component({
  selector: 'app-syrups-container',
  templateUrl: './syrups-container.component.html',
  styleUrls: ['./syrups-container.component.scss']
})
export class SyrupsContainerComponent implements OnInit {

  syrups: SYRUP[];
  stock: STOCK;
  chocolate: STOCK;
  fresa: STOCK;
  manjar: STOCK;
  chicles: STOCK;
  mani: STOCK;
  stockChocolate: any[];
  stockFresa: any[];
  stockManjar: any[];
  stockChicles: any[];
  stockMani: any[];
  stocks: any[];
  stocksTotal: any[];
  constructor(
    private salsasServices: SalsasService,
    private inventarioSyrupsService: InventarioSyrupsService
  ) { }

  ngOnInit(): void {
    this.fetchToppingSal();
  }


  // tslint:disable-next-line:typedef
  fetchToppingSal() {
    this.salsasServices.getAllSyrups()
    .subscribe(data => {
      this.syrups = data.map( e => {
        return {
          id: e.payload.doc.id,
          producto: e.payload.doc.data().producto,
          unidadMedida: e.payload.doc.data().unidadMedida
        };
      });
      this.fetchStockChocolate(this.syrups[0].id);
      this.fetchStockFresa(this.syrups[1].id);
      this.fetchStockManjar(this.syrups[2].id);
      this.fetchStockChicles(this.syrups[3].id);
      this.fetchStockMani(this.syrups[4].id);
    });
  }

  // tslint:disable-next-line:typedef
  fetchStockChocolate(id: string){
    this.inventarioSyrupsService.getStock(id)
    .subscribe(data => {
      this.chocolate = data.map( e => {
        return {
          codigo: e.payload.doc.data().codigo,
          stock: e.payload.doc.data().stock
        };
      });
      this.stockChocolate = [Object.assign(this.syrups[0], this.chocolate)];
    });
  }
    // tslint:disable-next-line:typedef
    fetchStockFresa(id: string){
      this.inventarioSyrupsService.getStock(id)
      .subscribe(data => {
        this.fresa = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockFresa = [Object.assign(this.syrups[1], this.fresa)];
      });
    }
      // tslint:disable-next-line:typedef
  fetchStockManjar(id: string){
    this.inventarioSyrupsService.getStock(id)
    .subscribe(data => {
      this.manjar = data.map( e => {
        return {
          codigo: e.payload.doc.data().codigo,
          stock: e.payload.doc.data().stock
        };
      });
      this.stockManjar = [Object.assign(this.syrups[2], this.manjar)];
    });
  }
    // tslint:disable-next-line:typedef
    fetchStockChicles(id: string){
      this.inventarioSyrupsService.getStock(id)
      .subscribe(data => {
        this.chicles = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockChicles = [Object.assign(this.syrups[3], this.chicles)];
      });
    }

    // tslint:disable-next-line:typedef
    fetchStockMani(id: string){
      this.inventarioSyrupsService.getStock(id)
      .subscribe(data => {
        this.mani = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockMani = [Object.assign(this.syrups[4], this.mani)];
        this.stocks = this.stockChocolate.concat(this.stockFresa, this.stockManjar, this.stockChicles,
                                                this.stockMani);
        console.log(this.stocks);
      });
    }

}
