import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { STOCK } from '@core/models/stock.model';
import { TOPPING } from '@core/models/topping.model';
import { ToppingSalService } from '@core/services/topping-sal/topping-sal.service';
import { timeStamp } from 'console';
import { timestamp } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventarioToppingSalService {

  idToppingS = '807wd7iFM8JV8o27h8P5';

  constructor(
    private firestore: AngularFirestore
  ) { }

  // tslint:disable-next-line:typedef
  getStock(docid: string) {
    const docRef = this.firestore.collection<TOPPING>('inventario').doc(this.idToppingS)
    .collection('toppings_sal').doc(docid);
    return docRef.collection('stock').snapshotChanges();
  }

}
