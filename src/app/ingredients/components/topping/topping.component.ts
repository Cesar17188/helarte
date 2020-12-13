import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataToppinD } from '@core/models/dialogoToppingDulce';
import { TOPPING } from '@core/models/topping.model';
import { ToppingsContainer } from '@ingredients/containers/toppings/toppings.container';

@Component({
  selector: 'app-topping',
  templateUrl: './topping.component.html',
  styleUrls: ['./topping.component.scss']
})
export class ToppingComponent implements OnInit {

  @Input() toppingD: TOPPING;
  @Output() toppingAdd: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<ToppingsContainer>,
    @Inject(MAT_DIALOG_DATA) public data: DataToppinD
  ) { }

  // tslint:disable-next-line:typedef
  addcart() {
    console.log('añadir al carrito');
    this.toppingAdd.emit(this.toppingD.codigo);
  }
  ngOnInit(): void {
  }

  select(): void{
    this.data.toppingCod = this.toppingD.codigo;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
