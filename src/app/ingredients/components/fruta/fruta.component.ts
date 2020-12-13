import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { frutaData } from '@core/models/dialogoFruta';
import { FRUTA } from '@core/models/fruta.model';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit {

  @Input() fruta: FRUTA;
  @Output() frutaAdd: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<FrutaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: frutaData
  ) { }

  // tslint:disable-next-line:typedef
  addcart() {
    console.log('añadir al carrito');
    this.frutaAdd.emit(this.fruta.codigo);
    }
    ngOnInit(): void {
    }

    select(): void{
      this.data.frutaCod = this.fruta.codigo;
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
}
