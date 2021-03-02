import { Component, OnInit } from '@angular/core';
import { STOCK } from '@core/models/stock.model';
import { SYRUP } from '@core/models/syrup.model';
import { InventarioCremaService } from '@core/services/inventario/inventario-crema/inventario-crema.service';
import { SalsasService } from '@core/services/salsas/salsas.service';

@Component({
  selector: 'app-crema-container',
  templateUrl: './crema-container.component.html',
  styleUrls: ['./crema-container.component.scss']
})
export class CremaContainerComponent implements OnInit {

  crema: SYRUP[];
  stock: STOCK;
  stockCrema: any[];
  stocks: any[];
  stocksTotal: any[];
  constructor(
    private cremaService: SalsasService,
    private inventarioCremaService: InventarioCremaService
  ) { }

  ngOnInit(): void {
    this.fetchCrema();
  }


  // tslint:disable-next-line:typedef
  fetchCrema() {
    this.cremaService.getCrema()
    .subscribe(data => {
      this.crema = data.map( e => {
        return {
          id: e.payload.doc.id,
          producto: e.payload.doc.data().producto,
          unidadMedida: e.payload.doc.data().unidadMedida
        };
      });
      this.fetchInventarioCrema(this.crema[0].id);
    });
  }

    // tslint:disable-next-line:typedef
    fetchInventarioCrema(id: string){
      this.inventarioCremaService.getStock(id)
      .subscribe(data => {
        this.stock = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockCrema = [Object.assign(this.crema[0], this.stock)];
        this.stocks = this.stockCrema;
        console.log(this.stocks);
      });
    }

}
