import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit(): void {

  }

}
