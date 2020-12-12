import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FRUTA } from '@core/models/fruta.model';

@Injectable({
  providedIn: 'root'
})
export class FrutasService {

  idFruta = 'rw3e9oLTCmurIcCbYfAm';
  docRef = this.firestore.collection<FRUTA>('inventario').doc(this.idFruta);

  constructor(
    private firestore: AngularFirestore,
  ) { }

  // tslint:disable-next-line:typedef
  public createFruta(data: FRUTA) {
    return this.docRef.collection('frutas').add(data);
  }


  // tslint:disable-next-line:typedef
  public getFruta(codigo: string) {
    return this.docRef.collection('frutas', ref => ref.
       where('codigo', '==', codigo)).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public getAllFrutas() {
    return this.docRef.collection('frutas', ref => ref.
            orderBy('codigo', 'asc')).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public updateFruta(documentId: string, partialData: Partial<FRUTA>){
    this.docRef.collection('frutas').doc(documentId).
    update(partialData);
  }


  // tslint:disable-next-line:typedef
  public deleteFruta(documentId: string) {
    this.docRef.collection('frutas').doc(documentId).delete();
  }
}
