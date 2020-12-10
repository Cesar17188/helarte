import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '@core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShakesService {

  idShake = '7R8D8PRsTKb6jkp4GH08';
  docRef = this.firestore.collection<Product>('Productos').doc(this.idShake);
  constructor(
    private firestore: AngularFirestore,
  ) { }

  // tslint:disable-next-line:typedef
  public createShake(data: Product) {
    return this.docRef.collection('shakes').add(data);
  }


  // tslint:disable-next-line:typedef
  public getShake(codigo: string) {
    return this.docRef.collection('shakes', ref => ref.
      where('codigo', '==', codigo)).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public getAllShakes() {
    return this.docRef.collection('shakes', ref => ref.
           orderBy('codigo', 'asc')).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public updateShake(documentId: string, partialData: Partial<Product>){
    this.docRef.collection('shakes').doc(documentId).
                                 update(partialData);
  }


  // tslint:disable-next-line:typedef
  public deleteShake(documentId: string) {
    this.docRef.collection('shakes').doc(documentId).delete();
  }

}
