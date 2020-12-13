import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '@core/models/dialogoSaborHelado';
import { Product } from '@core/models/product.model';
import { SaboresContainer } from '@ingredients/containers/sabores/sabores.container';

@Component({
  selector: 'app-flavor',
  templateUrl: './flavor.component.html',
  styleUrls: ['./flavor.component.scss']
})
export class FlavorComponent implements OnInit {

  @Input() product: Product;
  @Output() productAdd: EventEmitter<any> = new EventEmitter();

    constructor(
    public dialogRef: MatDialogRef<SaboresContainer>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

  // tslint:disable-next-line:typedef
  addcart() {
      console.log('añadir al carrito');
      this.productAdd.emit(this.product.codigo);
  }
  ngOnInit(): void {
  }

  select(): void{
    this.data.codflavor = this.product.codigo;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
