import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inventarioG } from '@core/models/dialogoInventario';
import { STOCK } from '@core/models/stock.model';
import { InventarioFrutasService } from '@core/services/inventario/inventario-frutas/inventario-frutas.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.scss']
})
export class FrutasComponent implements OnInit {

  id: string;
  stock: number;

  @Input() FrutasStock: any[];

  displayedColumns: string[] = ['Producto', 'Stock', 'Tipo', 'Acciones'];

  constructor(
    public dialogInventario: MatDialog,
    private invanterioFrutas: InventarioFrutasService
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  save(producto: any, stock: number){
    // console.log(producto.producto, producto.id, stock);
    const inventarioDialog = this.dialogInventario.open(AppSyrupsDialog, {
      width: '250 px',
      data: {id: producto.id, producto: producto.producto, stock}
    });

    inventarioDialog.afterClosed().subscribe(result => {
      const stockfinale = {stock: result, fecha: firebase.default.firestore.FieldValue.serverTimestamp()};
      try{
        this.invanterioFrutas.createStock(producto.id, stockfinale);
        alert('se han ingresado el stock correctamente');
      }catch (err){
        alert('Inventario no actualizado');
      }
    });
  }

}

@Component({
  selector: 'app-frutas-stock-dialog',
  templateUrl: './frutas-stock-dialog.html'
})
// tslint:disable-next-line:component-class-suffix
export class AppSyrupsDialog {

  inventarioStock: number;
  inventarioFinal = 0;
  constructor(
    private invanterioFrutas: InventarioFrutasService,
    public inventarioDialog: MatDialogRef<AppSyrupsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: inventarioG) {}

    // tslint:disable-next-line:typedef
    agregarStock(id: string, stock: number){
      let stockActual: STOCK;
      let stockNumber = 0;
      this.invanterioFrutas.getStock(id).subscribe(idata => {
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
