import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TOPPING } from '@core/models/topping.model';

import { ToppingSalService } from '@core/services/topping-sal/topping-sal.service';

@Injectable({
  providedIn: 'root'
})
export class ToppingsSalService {

  idToppingS = '807wd7iFM8JV8o27h8P5';
  docRef = this.firestore.collection('inventario').doc(this.idToppingS);

  constructor(
    private firestore: AngularFirestore,
  ) { }

  // tslint:disable-next-line:typedef
  public getAllStocks(){
    return this.docRef.collection('toppings_sal', ref => ref.
            orderBy('codigo', 'asc').firestore.collectionGroup('stock')).valueChanges();
  }
}
