import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sabores',
  templateUrl: './sabores.component.html',
  styleUrls: ['./sabores.component.scss']
})
export class SaboresComponent implements OnInit {

  @Input() SaboresStock: any[];

  displayedColumns: string[] = ['Producto', 'Stock', 'Tipo'];

  constructor() { }

  ngOnInit(): void {
  }

}
