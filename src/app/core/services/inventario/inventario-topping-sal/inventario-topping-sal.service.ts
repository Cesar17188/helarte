import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { STOCK } from '@core/models/stock.model';
import { TOPPING } from '@core/models/topping.model';


@Injectable({
  providedIn: 'root'
})
export class InventarioToppingSalService {

  idToppingS = '807wd7iFM8JV8o27h8P5';
  docRef = this.firestore.collection<TOPPING>('inventario').doc(this.idToppingS).collection('toppings_sal');
  constructor(
    private firestore: AngularFirestore
  ) { }

  // tslint:disable-next-line:typedef
  getStock(docid: string) {
    const doc = this.docRef.doc(docid);
    return doc.collection('stock').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getAllStocks() {
    return this.docRef.snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  createStock(docid: string, data: STOCK){
    return this.docRef.doc(docid).collection('stock').add(data);
  }

}
