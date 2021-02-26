import { Component, OnInit } from '@angular/core';
import { SABOR } from '@core/models/sabor.model';
import { STOCK } from '@core/models/stock.model';
import { InventarioSaboresService } from '@core/services/inventario/inventario-sabores/inventario-sabores.service';
import { SaboresService } from '@core/services/sabores/sabores.service';

@Component({
  selector: 'app-sabores-container',
  templateUrl: './sabores-container.component.html',
  styleUrls: ['./sabores-container.component.scss']
})
export class SaboresContainerComponent implements OnInit {

  sabores: SABOR[];
  stock: STOCK;
  chocolate: STOCK;
  vainilla: STOCK;
  rosasCerezas: STOCK;
  cafeAlmendras: STOCK;
  cocoCocoRalladoPasas: STOCK;
  mora: STOCK;
  mango: STOCK;
  guanabana: STOCK;
  maracuya: STOCK;
  zanahoriaNaranja: STOCK;
  limonHiervaBuena: STOCK;
  chicleSandia: STOCK;
  stockChocolate: any[];
  stockVainilla: any[];
  stockRosasCerezas: any[];
  stockCafeAlmendras: any[];
  stockCocoCocoRalladoPasas: any[];
  stockMora: any[];
  stockMango: any[];
  stockGuanabana: any[];
  stockMaracuya: any[];
  stockZanahoraNaranja: any[];
  stockLimonHiervaBuena: any[];
  stockChicleSandia: any[];
  stocks: any[];
  stocksTotal: any[];
  constructor(
    private saboresService: SaboresService,
    private inventarioSaboresServices: InventarioSaboresService
  ) { }

  ngOnInit(): void {
    this.fetchToppingSal();
  }


  // tslint:disable-next-line:typedef
  fetchToppingSal() {
    this.saboresService.getAllSabores()
    .subscribe(data => {
      this.sabores = data.map( e => {
        return {
          id: e.payload.doc.id,
          producto: e.payload.doc.data().producto,
          unidadMedida: e.payload.doc.data().unidadMedida
        };
      });
      this.fetchStockChocolate(this.sabores[0].id);
      this.fetchStockVainilla(this.sabores[1].id);
      this.fetchStockRosasCerezas(this.sabores[2].id);
      this.fetchStockCafeAlmendras(this.sabores[3].id);
      this.fetchStockCocoCocoRalladoPasas(this.sabores[4].id);
      this.fetchStockMora(this.sabores[5].id);
      this.fetchStockMango(this.sabores[6].id);
      this.fetchStockGuanabana(this.sabores[7].id);
      this.fetchStockMaracuya(this.sabores[8].id);
      this.fetchStockZanahoriaNaranja(this.sabores[9].id);
      this.fetchStockLimonHiervaBuena(this.sabores[10].id);
      this.fetchStockChicleSandia(this.sabores[11].id);
    });
  }

  // tslint:disable-next-line:typedef
  fetchStockChocolate(id: string){
    this.inventarioSaboresServices.getStock(id)
    .subscribe(data => {
      this.chocolate = data.map( e => {
        return {
          codigo: e.payload.doc.data().codigo,
          stock: e.payload.doc.data().stock
        };
      });
      this.stockChocolate = [Object.assign(this.sabores[0], this.chocolate)];
    });
  }
    // tslint:disable-next-line:typedef
    fetchStockVainilla(id: string){
      this.inventarioSaboresServices.getStock(id)
      .subscribe(data => {
        this.vainilla = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockVainilla = [Object.assign(this.sabores[1], this.vainilla)];
      });
    }
      // tslint:disable-next-line:typedef
  fetchStockRosasCerezas(id: string){
    this.inventarioSaboresServices.getStock(id)
    .subscribe(data => {
      this.rosasCerezas = data.map( e => {
        return {
          codigo: e.payload.doc.data().codigo,
          stock: e.payload.doc.data().stock
        };
      });
      this.stockRosasCerezas = [Object.assign(this.sabores[2], this.rosasCerezas)];
    });
  }
    // tslint:disable-next-line:typedef
    fetchStockCafeAlmendras(id: string){
      this.inventarioSaboresServices.getStock(id)
      .subscribe(data => {
        this.cafeAlmendras = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockCafeAlmendras = [Object.assign(this.sabores[3], this.cafeAlmendras)];
      });
    }

    // tslint:disable-next-line:typedef
    fetchStockCocoCocoRalladoPasas(id: string){
      this.inventarioSaboresServices.getStock(id)
      .subscribe(data => {
        this.cocoCocoRalladoPasas = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockCocoCocoRalladoPasas = [Object.assign(this.sabores[4], this.cocoCocoRalladoPasas)];
      });
    }

    // tslint:disable-next-line:typedef
    fetchStockMora(id: string){
      this.inventarioSaboresServices.getStock(id)
      .subscribe(data => {
        this.mora = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockMora = [Object.assign(this.sabores[5], this.mora)];
      });
    }

    // tslint:disable-next-line:typedef
    fetchStockMango(id: string){
      this.inventarioSaboresServices.getStock(id)
      .subscribe(data => {
        this.mango = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockMango = [Object.assign(this.sabores[6], this.mango)];
      });
    }

     // tslint:disable-next-line:typedef
     fetchStockGuanabana(id: string){
      this.inventarioSaboresServices.getStock(id)
      .subscribe(data => {
        this.guanabana = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockGuanabana = [Object.assign(this.sabores[7], this.guanabana)];
      });
    }

    // tslint:disable-next-line:typedef
    fetchStockMaracuya(id: string){
      this.inventarioSaboresServices.getStock(id)
      .subscribe(data => {
        this.maracuya = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockMaracuya = [Object.assign(this.sabores[8], this.maracuya)];
      });
    }

    // tslint:disable-next-line:typedef
    fetchStockZanahoriaNaranja(id: string){
      this.inventarioSaboresServices.getStock(id)
      .subscribe(data => {
        this.zanahoriaNaranja = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockZanahoraNaranja = [Object.assign(this.sabores[9], this.zanahoriaNaranja)];
      });
    }

     // tslint:disable-next-line:typedef
     fetchStockLimonHiervaBuena(id: string){
      this.inventarioSaboresServices.getStock(id)
      .subscribe(data => {
        this.limonHiervaBuena = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockLimonHiervaBuena = [Object.assign(this.sabores[10], this.limonHiervaBuena)];
      });
    }

    // tslint:disable-next-line:typedef
    fetchStockChicleSandia(id: string){
      this.inventarioSaboresServices.getStock(id)
      .subscribe(data => {
        this.chicleSandia = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockChicleSandia = [Object.assign(this.sabores[11], this.chicleSandia)];
        this.stocks = this.stockChocolate.concat(this.stockVainilla, this.stockRosasCerezas, this.stockCafeAlmendras,
                                                 this.stockCocoCocoRalladoPasas, this.stockMora, this.stockMango,
                                                 this.stockGuanabana, this.stockMaracuya, this.stockZanahoraNaranja,
                                                 this.stockLimonHiervaBuena, this.stockChicleSandia);
        console.log(this.stocks);
      });
    }

}
