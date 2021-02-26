import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SABOR } from '@core/models/sabor.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioSaboresService {

  idSabores = 'apGpKJwxxu2yXiCBpBt2';

  constructor(
    private firestore: AngularFirestore
  ) { }

  // tslint:disable-next-line:typedef
  getStock(docid: string) {
    const docRef = this.firestore.collection<SABOR>('inventario').doc(this.idSabores)
    .collection('sabores').doc(docid);
    return docRef.collection('stock').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getAllStocks() {
    return this.firestore.collection<SABOR>('inventario').doc(this.idSabores)
    .collection('sabores').snapshotChanges();
  }
}
