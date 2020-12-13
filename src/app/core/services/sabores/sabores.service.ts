import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SABOR } from '@core/models/sabor.model';

@Injectable({
  providedIn: 'root'
})
export class SaboresService {

  idSabor = 'apGpKJwxxu2yXiCBpBt2';
  docRef = this.firestore.collection<SABOR>('inventario').doc(this.idSabor);


  constructor(
    private firestore: AngularFirestore,
  ) { }

  // tslint:disable-next-line:typedef
  public createSabor(data: SABOR) {
    return this.docRef.collection('sabores').add(data);
  }


  // tslint:disable-next-line:typedef
  public getSabor(codigo: string) {
    return this.docRef.collection('sabores', ref => ref.
       where('codigo', '==', codigo)).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public getAllSabores() {
    return this.docRef.collection('sabores', ref => ref.
            orderBy('codigo', 'asc')).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public updateSabor(documentId: string, partialData: Partial<SABOR>){
    this.docRef.collection('sabores').doc(documentId).
    update(partialData);
  }


  // tslint:disable-next-line:typedef
  public deleteSabor(documentId: string) {
    this.docRef.collection('sabores').doc(documentId).delete();
  }
}
