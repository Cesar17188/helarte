import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inventarioG } from '@core/models/dialogoInventario';
import { STOCK } from '@core/models/stock.model';
import { InventarioToppingDulceService } from '@core/services/inventario/inventario-topping-dulce/inventario-topping-dulce.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-toppings-dulce',
  templateUrl: './toppings-dulce.component.html',
  styleUrls: ['./toppings-dulce.component.scss']
})
export class ToppingsDulceComponent implements OnInit {

  id: string;
  stock: number;

  @Input() ToppingsStock: any[];

  displayedColumns: string[] = ['Producto', 'Stock', 'Tipo', 'Acciones'];

  constructor(
    public dialogInventario: MatDialog,
    private inventarioToppingDulce: InventarioToppingDulceService
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  save(producto: any, stock: number){
    // console.log(producto.producto, producto.id, stock);
    const inventarioDialog = this.dialogInventario.open(AppToppingsDDialog, {
      width: '250 px',
      data: {id: producto.id, producto: producto.producto, stock}
    });

    inventarioDialog.afterClosed().subscribe(result => {
      const stockfinale = {stock: result, fecha: firebase.default.firestore.FieldValue.serverTimestamp()};
      try{
        this.inventarioToppingDulce.createStock(producto.id, stockfinale);
        alert('se han ingresado el stock correctamente');
      }catch (err){
        alert('Inventario no actualizado');
      }
    });
  }

}

@Component({
  selector: 'app-toppings-dulce-stock-dialog',
  templateUrl: './toppings-dulce-stock-dialog.html'
})
// tslint:disable-next-line:component-class-suffix
export class AppToppingsDDialog {

  inventarioStock: number;
  inventarioFinal = 0;
  constructor(
    private inventarioToppingDulce: InventarioToppingDulceService,
    public inventarioDialog: MatDialogRef<AppToppingsDDialog>,
    @Inject(MAT_DIALOG_DATA) public data: inventarioG) {}

    // tslint:disable-next-line:typedef
    agregarStock(id: string, stock: number){
      let stockActual: STOCK;
      let stockNumber = 0;
      this.inventarioToppingDulce.getStock(id).subscribe(idata => {
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
