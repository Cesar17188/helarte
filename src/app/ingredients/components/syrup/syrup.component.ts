import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { syrupData } from '@core/models/dialogoSyrup';
import { SYRUP } from '@core/models/syrup.model';
import { SyrupsContainer } from '@ingredients/containers/syrups/syrups.container';

@Component({
  selector: 'app-syrup',
  templateUrl: './syrup.component.html',
  styleUrls: ['./syrup.component.scss']
})
export class SyrupComponent implements OnInit {

  @Input() syrup: SYRUP;
  @Output() syrupAdd: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<SyrupsContainer>,
    @Inject(MAT_DIALOG_DATA) public data: syrupData
  ) { }

  // tslint:disable-next-line:typedef
  addcart() {
    console.log('añadir al carrito');
    this.syrupAdd.emit(this.syrup.codigo);
  }

  ngOnInit(): void {
  }

  select(): void{
    this.data.codSyrup = this.syrup.codigo;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
