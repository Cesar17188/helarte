import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SABOR } from '@core/models/sabor.model';
import { STOCK } from '@core/models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioSaboresService {

  idSabores = 'apGpKJwxxu2yXiCBpBt2';
  docRef = this.firestore.collection<SABOR>('inventario').doc(this.idSabores).collection('sabores');
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
    return this.firestore.collection<SABOR>('inventario').doc(this.idSabores)
    .collection('sabores').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  createStock(docid: string, data: STOCK){
    return this.docRef.doc(docid).collection('stock').add(data);
  }
}
