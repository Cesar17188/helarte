import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toppings-dulce',
  templateUrl: './toppings-dulce.component.html',
  styleUrls: ['./toppings-dulce.component.scss']
})
export class ToppingsDulceComponent implements OnInit {

  @Input() ToppingsStock: any[];

  displayedColumns: string[] = ['Producto', 'Stock', 'Tipo'];

  constructor() { }

  ngOnInit(): void {
  }

}
