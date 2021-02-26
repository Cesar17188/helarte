import { Component, OnInit } from '@angular/core';
import { FRUTA } from '@core/models/fruta.model';
import { STOCK } from '@core/models/stock.model';
import { FrutasService } from '@core/services/frutas/frutas.service';
import { InventarioFrutasService } from '@core/services/inventario/inventario-frutas/inventario-frutas.service';

@Component({
  selector: 'app-frutas-container',
  templateUrl: './frutas-container.component.html',
  styleUrls: ['./frutas-container.component.scss']
})
export class FrutasContainerComponent implements OnInit {

  frutas: FRUTA[];
  stock: STOCK;
  durazno: STOCK;
  banana: STOCK;
  fresa: STOCK;
  mango: STOCK;
  uva: STOCK;
  stockDurazno: any[];
  stockBanana: any[];
  stockFresa: any[];
  stockMango: any[];
  stockUva: any[];
  stocks: any[];
  stocksTotal: any[];
  constructor(
    private frutasService: FrutasService,
    private inventarioFrutasService: InventarioFrutasService
  ) { }

  ngOnInit(): void {
    this.fetchToppingFrutas();
  }


  // tslint:disable-next-line:typedef
  fetchToppingFrutas() {
    this.frutasService.getAllFrutas()
    .subscribe(data => {
      this.frutas = data.map( e => {
        return {
          id: e.payload.doc.id,
          producto: e.payload.doc.data().producto,
          unidadMedida: e.payload.doc.data().unidadMedida
        };
      });
      this.fetchStockDurazno(this.frutas[0].id);
      this.fetchStockFresa(this.frutas[1].id);
      this.fetchStockUva(this.frutas[2].id);
      this.fetchStockMango(this.frutas[3].id);
      this.fetchStockBanana(this.frutas[4].id);
    });
  }

  // tslint:disable-next-line:typedef
  fetchStockDurazno(id: string){
    this.inventarioFrutasService.getStock(id)
    .subscribe(data => {
      this.durazno = data.map( e => {
        return {
          codigo: e.payload.doc.data().codigo,
          stock: e.payload.doc.data().stock
        };
      });
      this.stockDurazno = [Object.assign(this.frutas[0], this.durazno)];
    });
  }
    // tslint:disable-next-line:typedef
    fetchStockFresa(id: string){
      this.inventarioFrutasService.getStock(id)
      .subscribe(data => {
        this.fresa = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockFresa = [Object.assign(this.frutas[1], this.fresa)];
      });
    }
    // tslint:disable-next-line:typedef
    fetchStockUva(id: string){
      this.inventarioFrutasService.getStock(id)
      .subscribe(data => {
        this.uva = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockUva = [Object.assign(this.frutas[2], this.uva)];
      });
    }

    // tslint:disable-next-line:typedef
    fetchStockMango(id: string){
      this.inventarioFrutasService.getStock(id)
      .subscribe(data => {
        this.mango = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockMango = [Object.assign(this.frutas[3], this.mango)];
      });
    }

    // tslint:disable-next-line:typedef
    fetchStockBanana(id: string){
      this.inventarioFrutasService.getStock(id)
      .subscribe(data => {
        this.banana = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockBanana = [Object.assign(this.frutas[4], this.banana)];
        this.stocks = this.stockDurazno.concat(this.stockFresa, this.stockUva, this.stockMango, this.stockBanana);
        console.log(this.stocks);
      });
    }

}
