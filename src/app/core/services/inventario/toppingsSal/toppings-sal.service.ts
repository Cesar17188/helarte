import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { TOPPING } from '@core/models/topping.model';
import { STOCK } from '@core/models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class ToppingsSalService {

  constructor(

    private http: HttpClient
  ) { }

  // tslint:disable-next-line:typedef
  public getAllStocks(){
    return this.http.get<TOPPING[]>(`${environment.url_firestore}/807wd7iFM8JV8o27h8P5/toppings_sal/${environment.url_key}`);
  }

  // tslint:disable-next-line:typedef
  public getStock(){
    return this.http.get<STOCK>(`${environment.url_firestore}/807wd7iFM8JV8o27h8P5/toppings_sal/l7fVHKpdBBXmsnYJCWVU/stock/${environment.url_key}`);
  }
}
