import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TOPPING } from '@core/models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class ToppingSalService {

  idToppingS = '807wd7iFM8JV8o27h8P5';
  docRef = this.firestore.collection<TOPPING>('inventario').doc(this.idToppingS);

  constructor(
    private firestore: AngularFirestore,
  ) { }

  // tslint:disable-next-line:typedef
  public createToppingS(data: TOPPING) {
    return this.docRef.collection('toppings_sal').add(data);
  }


  // tslint:disable-next-line:typedef
  public getToppingS(codigo: string) {
    return this.docRef.collection('toppings_sal', ref => ref.
       where('codigo', '==', codigo)).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public getAllToppingsS() {
    return this.docRef.collection('toppings_sal', ref => ref.
            orderBy('codigo', 'asc')).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public updateToppingS(documentId: string, partialData: Partial<TOPPING>){
    this.docRef.collection('toppings_sal').doc(documentId).
    update(partialData);
  }


  // tslint:disable-next-line:typedef
  public deleteToppingS(documentId: string) {
    this.docRef.collection('toppings_sal').doc(documentId).delete();
  }
}
