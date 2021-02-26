import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TOPPING } from '@core/models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioToppingDulceService {

  idToppingD = 'FedRafyDEClXfXuolZyE';

  constructor(
    private firestore: AngularFirestore
  ) { }

  // tslint:disable-next-line:typedef
  getStock(docid: string) {
    const docRef = this.firestore.collection<TOPPING>('inventario').doc(this.idToppingD)
    .collection('toppings_dulce').doc(docid);
    return docRef.collection('stock').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getAllStocks() {
    return this.firestore.collection<TOPPING>('inventario').doc(this.idToppingD)
    .collection('toppings_dulce').snapshotChanges();
  }
}
