import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crema',
  templateUrl: './crema.component.html',
  styleUrls: ['./crema.component.scss']
})
export class CremaComponent implements OnInit {

  @Input() CremaStock: any[];

  displayedColumns: string[] = ['Producto', 'Stock', 'Tipo'];

  constructor() { }

  ngOnInit(): void {
  }

}
