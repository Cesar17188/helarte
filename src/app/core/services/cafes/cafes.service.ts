import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '@core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CafesService {
  idCafe = 'gxsHCLZzEP3m14A4qsX4';
  docRef = this.firestore.collection<Product>('Productos').doc(this.idCafe);

  constructor(
    private firestore: AngularFirestore,
  ) { }

  // tslint:disable-next-line:typedef
  public createCafe(data: Product) {
    return this.docRef.collection('cafes').add(data);
  }


  // tslint:disable-next-line:typedef
  public getCafe(codigo: string) {
    return this.docRef.collection('cafes', ref => ref.
     where('codigo', '==', codigo)).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public getAllCafes() {
    return this.docRef.collection('cafes', ref => ref.
          orderBy('codigo', 'asc')).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public updateCafe(documentId: string, partialData: Partial<Product>){
    this.docRef.collection('cafes').doc(documentId).
                                update(partialData);
  }

  // tslint:disable-next-line:typedef
  public deleteCafe(documentId: string) {
    this.docRef.collection('cafes').doc(documentId).delete();
  }
}
