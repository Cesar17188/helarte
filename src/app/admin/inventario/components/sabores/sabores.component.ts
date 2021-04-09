import { getLocaleEraNames } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inventarioG } from '@core/models/dialogoInventario';
import { STOCK } from '@core/models/stock.model';
import { InventarioSaboresService } from '@core/services/inventario/inventario-sabores/inventario-sabores.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sabores',
  templateUrl: './sabores.component.html',
  styleUrls: ['./sabores.component.scss']
})
export class SaboresComponent implements OnInit {

  id: string;
  stock: number;

  @Input() SaboresStock: any[];

  displayedColumns: string[] = ['Producto', 'Stock', 'Tipo', 'Acciones'];

  constructor(
    public dialogInventario: MatDialog,
    private inventarioSabores: InventarioSaboresService
  ) {
  }

  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  save(producto: any, stock: number){
    // console.log(producto.producto, producto.id, stock);
    const inventarioDialog = this.dialogInventario.open(AppSaboresDialog, {
      width: '250 px',
      data: {id: producto.id, producto: producto.producto, stock}
    });

    inventarioDialog.afterClosed().subscribe(result => {
      const stockfinale = {stock: result, fecha: firebase.default.firestore.FieldValue.serverTimestamp()};
      try{
        this.inventarioSabores.createStock(producto.id, stockfinale);
      }catch (err){
        alert('Inventario no actualizado');
      }
    });
  }
}

@Component({
  selector: 'app-sabores-stock-dialog',
  templateUrl: './sabores-stock-dialog.html'
})
// tslint:disable-next-line:component-class-suffix
export class AppSaboresDialog {

  inventarioStock: number;
  inventarioFinal = 0;
  constructor(
    private inventarioSabores: InventarioSaboresService,
    public inventarioDialog: MatDialogRef<AppSaboresDialog>,
    @Inject(MAT_DIALOG_DATA) public data: inventarioG) {}

    // tslint:disable-next-line:typedef
    agregarStock(id: string, stock: number){
      let stockActual: STOCK;
      let stockNumber = 0;
      this.inventarioSabores.getStock(id).subscribe(idata => {
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
