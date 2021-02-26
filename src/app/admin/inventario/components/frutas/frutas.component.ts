import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.scss']
})
export class FrutasComponent implements OnInit {

  @Input() FrutasStock: any[];

  displayedColumns: string[] = ['Producto', 'Stock', 'Tipo'];

  constructor() { }

  ngOnInit(): void {
  }

}
