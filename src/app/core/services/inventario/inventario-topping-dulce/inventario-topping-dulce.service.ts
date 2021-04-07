import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { STOCK } from '@core/models/stock.model';
import { TOPPING } from '@core/models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioToppingDulceService {

  idToppingD = 'FedRafyDEClXfXuolZyE';
  docRef = this.firestore.collection<TOPPING>('inventario')
  .doc(this.idToppingD);

  constructor(
    private firestore: AngularFirestore
  ) { }

  // tslint:disable-next-line:typedef
  getStock(docid: string) {
    return this.docRef.collection('toppings_dulce')
    .doc(docid).collection('stock', ref => ref.orderBy('fecha', 'desc').limit(1)).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getAllStocks(docid: string) {
    return this.docRef
    .collection('toppings_dulce')
    .doc(docid).collection('stock', ref => ref.orderBy('fecha', 'desc')).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  createStock(docid: string, data: STOCK){
    return this.docRef.collection('toppings_dulce')
    .doc(docid).collection('stock').add(data);
  }
}
