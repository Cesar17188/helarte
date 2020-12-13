import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SYRUP } from '@core/models/syrup.model';

@Injectable({
  providedIn: 'root'
})
export class SalsasService {

  idSalsa = '222hp24iMQjOXInowfxT';
  idCrema = 'kRqQuZfoYcVuqB9YNOOl';
  docRef = this.firestore.collection<SYRUP>('inventario').doc(this.idSalsa);
  cremRef = this.firestore.collection<SYRUP>('inventario');

  constructor(
    private firestore: AngularFirestore,
  ) { }

  // tslint:disable-next-line:typedef
  public createSyrup(data: SYRUP) {
    return this.docRef.collection('syrups').add(data);
  }


  // tslint:disable-next-line:typedef
  public getSyrup(codigo: string) {
    return this.docRef.collection('syrups', ref => ref.
       where('codigo', '==', codigo)).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public getAllSyrups() {
    return this.docRef.collection('syrups', ref => ref.
            orderBy('codigo', 'asc')).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public updateSyrup(documentId: string, partialData: Partial<SYRUP>){
    this.docRef.collection('syrups').doc(documentId).
    update(partialData);
  }


  // tslint:disable-next-line:typedef
  public deleteSyrup(documentId: string) {
    this.docRef.collection('syrups').doc(documentId).delete();
  }

 // tslint:disable-next-line:typedef
 public getCrema() {
   return this.firestore.collection<SYRUP>('inventario',
   ref => ref.where('codigo', '==', 'crem0001')).snapshotChanges();
 }
}
