import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SYRUP } from '@core/models/syrup.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioCremaService {

  idCrema = 'kRqQuZfoYcVuqB9YNOOl';

  constructor(
    private firestore: AngularFirestore
  ) { }

  // tslint:disable-next-line:typedef
  getStock(docid: string) {
    const docRef = this.firestore.collection<SYRUP>('inventario').doc(this.idCrema);
    return docRef.collection('stock').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getAllStocks() {
    return this.firestore.collection<SYRUP>('inventario').doc(this.idCrema)
    .collection('stock').snapshotChanges();
  }
}
