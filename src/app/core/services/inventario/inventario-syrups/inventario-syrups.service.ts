import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { STOCK } from '@core/models/stock.model';
import { SYRUP } from '@core/models/syrup.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioSyrupsService {

  idSyrups = '222hp24iMQjOXInowfxT';
  docRef = this.firestore.collection<SYRUP>('inventario').doc(this.idSyrups).collection('syrups');

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
    return this.firestore.collection<SYRUP>('inventario').doc(this.idSyrups)
    .collection('syrups').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  createStock(docid: string, data: STOCK){
    return this.docRef.doc(docid).collection('stock').add(data);
  }
}
