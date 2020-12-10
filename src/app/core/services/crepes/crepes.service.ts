import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '@core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CrepesService {

  idCrepe = 'GWqmRRP5NhuTZeJK6wfp';
  docRef = this.firestore.collection('Productos').doc(this.idCrepe);

  constructor(
    private firestore: AngularFirestore,
  ) { }

  // tslint:disable-next-line: typedef
  public createCrepe(data: Product) {
    return this.docRef.collection('crepes').add(data);
  }


  // tslint:disable-next-line: typedef
  public getCrepe(codigo: string) {
    return this.docRef.collection('crepes',
    ref => ref.where('codigo', '==', codigo)).snapshotChanges();
  }

  // tslint:disable-next-line: typedef
  public getAllCrepes() {
    return this.docRef.collection('crepes',
    ref => ref.orderBy('codigo', 'asc')).snapshotChanges();
  }

  // tslint:disable-next-line: typedef
  public updateCrepe(documentId: string, partialData: Partial<Product>){
    this.docRef.collection('crepes')
    .doc(documentId).update(partialData);
  }


  // tslint:disable-next-line: typedef
  public deleteCrepe(documentId: string) {
    this.docRef.collection('crepes').doc(documentId).delete();
  }
}
