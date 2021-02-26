import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SYRUP } from '@core/models/syrup.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioSyrupsService {

  idSyrups = '222hp24iMQjOXInowfxT';

  constructor(
    private firestore: AngularFirestore
  ) { }

  // tslint:disable-next-line:typedef
  getStock(docid: string) {
    const docRef = this.firestore.collection<SYRUP>('inventario').doc(this.idSyrups)
    .collection('syrups').doc(docid);
    return docRef.collection('stock').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getAllStocks() {
    return this.firestore.collection<SYRUP>('inventario').doc(this.idSyrups)
    .collection('syrups').snapshotChanges();
  }
}
