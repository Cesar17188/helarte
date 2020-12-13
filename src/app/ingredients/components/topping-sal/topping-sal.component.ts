import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataToppinS } from '@core/models/dialogoToppingSal';
import { TOPPING } from '@core/models/topping.model';

@Component({
  selector: 'app-topping-sal',
  templateUrl: './topping-sal.component.html',
  styleUrls: ['./topping-sal.component.scss']
})
export class ToppingSalComponent implements OnInit {

  @Input() toppingS: TOPPING;
  @Output() toppingAdd: EventEmitter<any> = new EventEmitter();


  constructor(
    public dialogRef: MatDialogRef<ToppingSalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataToppinS
  ) { }

  // tslint:disable-next-line:typedef
  addcart() {
    console.log('añadir al carrito');
    this.toppingAdd.emit(this.toppingS.codigo);
    }
    ngOnInit(): void {
    }

    select(): void{
      this.data.toppingCod = this.toppingS.codigo;
    }
    onNoClick(): void {
      this.dialogRef.close();
    }

}
