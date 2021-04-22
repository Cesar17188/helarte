import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '@core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ArepasService {
  idArepa = 'nYnqC2yuEZ8g0MKI5Tll';
  docRef = this.firestore.collection<Product>('Productos').doc(this.idArepa);

  constructor(
    private firestore: AngularFirestore,
  ) { }

  // tslint:disable-next-line:typedef
  public createArepa(data: Product) {
    return this.docRef.collection('arepas').add(data);
  }


  // tslint:disable-next-line:typedef
  public getArepa(codigo: string) {
    return this.docRef.collection('arepas', ref => ref.
     where('codigo', '==', codigo)).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public getAllArepas() {
    return this.docRef.collection('arepas', ref => ref.
          orderBy('codigo', 'asc')).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public updateArepa(documentId: string, partialData: Partial<Product>){
    this.docRef.collection('arepas').doc(documentId).
                                update(partialData);
  }

  // tslint:disable-next-line:typedef
  public deleteArepa(documentId: string) {
    this.docRef.collection('arepas').doc(documentId).delete();
  }
}
