import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FRUTA } from '@core/models/fruta.model';
import { STOCK } from '@core/models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioFrutasService {

  idFrutas = 'rw3e9oLTCmurIcCbYfAm';
  docRef = this.firestore.collection<FRUTA>('inventario').doc(this.idFrutas)
  .collection('frutas');

  constructor(
    private firestore: AngularFirestore
  ) { }

  // tslint:disable-next-line:typedef
  getStock(docid: string) {
    const doc = this.docRef.doc(docid);
    return doc.collection('stock', ref => ref.orderBy('fecha', 'desc').limit(1)).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getAllStocks(docid: string) {
    return this.docRef.doc(docid)
    .collection('stock', ref => ref.orderBy('fecha', 'desc')).snapshotChanges();
  }

    // tslint:disable-next-line:typedef
    createStock(docid: string, data: STOCK){
      return this.docRef.doc(docid).collection('stock').add(data);
    }
}
