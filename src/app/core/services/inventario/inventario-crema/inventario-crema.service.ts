import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { STOCK } from '@core/models/stock.model';
import { SYRUP } from '@core/models/syrup.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioCremaService {

  idCrema = 'kRqQuZfoYcVuqB9YNOOl';
  docRef = this.firestore.collection<SYRUP>('inventario').doc(this.idCrema);
  constructor(
    private firestore: AngularFirestore
  ) { }

  // tslint:disable-next-line:typedef
  getStock() {
    return this.docRef.collection('stock').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  getAllStocks() {
    return this.docRef.collection('stock').snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  createStock(data: STOCK){
    return this.docRef.collection('stock').add(data);
  }
}
