import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FRUTA } from '@core/models/fruta.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioFrutasService {

  idFrutas = 'rw3e9oLTCmurIcCbYfAm';

  constructor(
    private firestore: AngularFirestore
  ) { }

  // tslint:disable-next-line:typedef
  getStock(docid: string) {
    const docRef = this.firestore.collection<FRUTA>('inventario').doc(this.idFrutas)
    .collection('frutas').doc(docid);
    return docRef.collection('stock').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getAllStocks() {
    return this.firestore.collection<FRUTA>('inventario').doc(this.idFrutas)
    .collection('frutas').snapshotChanges();
  }
}
