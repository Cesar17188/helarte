import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { STOCK } from '@core/models/stock.model';
import { TOPPING } from '@core/models/topping.model';
import { ToppingSalService } from '@core/services/topping-sal/topping-sal.service';

@Component({
  selector: 'app-toppings-sal',
  templateUrl: './toppings-sal.component.html',
  styleUrls: ['./toppings-sal.component.scss']
})
export class ToppingsSalComponent implements OnInit {

  @Input() ToppingsStock: any[];

  displayedColumns: string[] = ['Producto', 'Stock', 'Tipo'];


  constructor(

  ) { }

  ngOnInit(): void {

  }

}
