import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inventarioG } from '@core/models/dialogoInventario';
import { STOCK } from '@core/models/stock.model';
import { SYRUP } from '@core/models/syrup.model';
import { InventarioCremaService } from '@core/services/inventario/inventario-crema/inventario-crema.service';
import { SalsasService } from '@core/services/salsas/salsas.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-crema',
  templateUrl: './crema.component.html',
  styleUrls: ['./crema.component.scss']
})
export class CremaComponent implements OnInit {

  id: string;
  stock: number;

  listaCrema: SYRUP[];
  listaStock: STOCK;
  CremaStock: any[];
  stockCrema: any[];

  // @Input() CremaStock: any[];

  displayedColumns: string[] = ['Producto', 'Stock', 'Tipo', 'Acciones'];

  constructor(
    public dialogInventario: MatDialog,
    private invanterioCrema: InventarioCremaService,
    private cremaService: SalsasService
  ) { }

  ngOnInit(): void {
    this.fetchCrema();
  }

  // tslint:disable-next-line:typedef
  save(producto: any, stock: number){
    // console.log(producto.producto, producto.id, stock);
    const inventarioDialog = this.dialogInventario.open(AppCremaDialog, {
      width: '250 px',
      data: {id: producto.id, producto: producto.producto, stock}
    });

    inventarioDialog.afterClosed().subscribe(result => {
      const stockfinale = {stock: result, fecha: firebase.default.firestore.FieldValue.serverTimestamp()};
      try{
        this.invanterioCrema.createStock(stockfinale);
        alert('se han ingresado el stock correctamente');
      }catch (err){
        alert('Inventario no actualizado');
      }
    });
  }

  // tslint:disable-next-line:typedef
  fetchCrema() {
    this.cremaService.getCrema()
    .subscribe(data => {
      this.listaCrema = data.map( e => {
        return {
          id: e.payload.doc.id,
          producto: e.payload.doc.data().producto,
          unidadMedida: e.payload.doc.data().unidadMedida
        };
      });
      this.fetchInventarioCrema(this.listaCrema[0].id);
    });
  }

    // tslint:disable-next-line:typedef
    fetchInventarioCrema(id: string){
      this.invanterioCrema.getStock()
      .subscribe(data => {
        this.listaStock = data.map( e => {
          return {
            codigo: e.payload.doc.data().codigo,
            stock: e.payload.doc.data().stock
          };
        });
        this.stockCrema = [Object.assign(this.listaCrema[0], this.listaStock)];
        this.CremaStock = this.stockCrema;
      });
    }

}

@Component({
  selector: 'app-crema-stock-dialog',
  templateUrl: './crema-stock-dialog.html'
})
// tslint:disable-next-line:component-class-suffix
export class AppCremaDialog {

  inventarioStock: number;
  inventarioFinal = 0;
  constructor(
    private invanterioCrema: InventarioCremaService,
    public inventarioDialog: MatDialogRef<AppCremaDialog>,
    @Inject(MAT_DIALOG_DATA) public data: inventarioG) {}

    // tslint:disable-next-line:typedef
    agregarStock(stock: number){
      let stockActual: STOCK;
      let stockNumber = 0;
      this.invanterioCrema.getStock().subscribe(idata => {
        stockActual = idata.map( e => {
          return {
            stock: e.payload.doc.data().stock
          };
        });
        stockNumber = stockActual[0].stock + Number(stock);
        this.data.stock = stockNumber;
        console.log(this.data.stock);
        this.inventarioDialog.close(this.data.stock);
      });
    }

    onNoClick(): void{
      this.inventarioDialog.close();
    }
}
