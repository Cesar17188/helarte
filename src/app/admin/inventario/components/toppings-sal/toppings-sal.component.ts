import { Component, Inject, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inventarioG } from '@core/models/dialogoInventario';
import { STOCK } from '@core/models/stock.model';
import { TOPPING } from '@core/models/topping.model';
import { InventarioToppingSalService } from '@core/services/inventario/inventario-topping-sal/inventario-topping-sal.service';
import { ToppingSalService } from '@core/services/topping-sal/topping-sal.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-toppings-sal',
  templateUrl: './toppings-sal.component.html',
  styleUrls: ['./toppings-sal.component.scss']
})
export class ToppingsSalComponent implements OnInit {

  id: string;
  stock: number;

  @Input() ToppingsStock: any[];

  displayedColumns: string[] = ['Producto', 'Stock', 'Tipo', 'Acciones'];


  constructor(
    public dialogInventario: MatDialog,
    private inventarioToppingSal: InventarioToppingSalService
  ) { }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  save(producto: any, stock: number){
    // console.log(producto.producto, producto.id, stock);
    const inventarioDialog = this.dialogInventario.open(AppToppingsSDialog, {
      width: '250 px',
      data: {id: producto.id, producto: producto.producto, stock}
    });

    inventarioDialog.afterClosed().subscribe(result => {
      const stockfinale = {stock: result, fecha: firebase.default.firestore.FieldValue.serverTimestamp()};
      try{
        this.inventarioToppingSal.createStock(producto.id, stockfinale);
        alert('se han ingresado el stock correctamente');
      }catch (err){
        alert('Inventario no actualizado');
      }
    });
  }

}

@Component({
  selector: 'app-toppings-sal-stock-dialog',
  templateUrl: './toppings-sal-stock-dialog.html'
})
// tslint:disable-next-line:component-class-suffix
export class AppToppingsSDialog {

  inventarioStock: number;
  inventarioFinal = 0;
  constructor(
    private inventarioToppingSal: InventarioToppingSalService,
    public inventarioDialog: MatDialogRef<AppToppingsSDialog>,
    @Inject(MAT_DIALOG_DATA) public data: inventarioG) {}

    // tslint:disable-next-line:typedef
    agregarStock(id: string, stock: number){
      let stockActual: STOCK;
      let stockNumber = 0;
      this.inventarioToppingSal.getStock(id).subscribe(idata => {
        stockActual = idata.map( e => {
          return {
            stock: e.payload.doc.data().stock
          };
        });
        stockNumber = stockActual[0].stock + Number(stock);
        this.data.stock = stockNumber;
        this.inventarioDialog.close(this.data.stock);
      });
    }

    onNoClick(): void{
      this.inventarioDialog.close();
    }
}
