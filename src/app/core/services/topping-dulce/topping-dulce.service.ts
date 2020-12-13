import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '@core/models/product.model';
import { TOPPING } from '@core/models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class ToppingDulceService {

  idToppingD = 'FedRafyDEClXfXuolZyE';
  docRef = this.firestore.collection<TOPPING>('inventario').doc(this.idToppingD);

  toppingD: Product [];

  constructor(
    private firestore: AngularFirestore,
  ) { }

  // tslint:disable-next-line:typedef
  public createToppingD(data: TOPPING) {
    return this.docRef.collection('toppings_dulce').add(data);
  }


  // tslint:disable-next-line:typedef
  public getToppingD(codigo: string) {
    return this.docRef.collection('toppings_dulce', ref => ref.
       where('codigo', '==', codigo)).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public getAllToppingD() {
    return this.docRef.collection('toppings_dulce', ref => ref.
            orderBy('codigo', 'asc')).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public updateToppingD(documentId: string, partialData: Partial<TOPPING>){
    this.docRef.collection('toppings_dulce').doc(documentId).
    update(partialData);
  }


  // tslint:disable-next-line:typedef
  public deleteToppingD(documentId: string) {
    this.docRef.collection('toppings_dulce').doc(documentId).delete();
  }
}
