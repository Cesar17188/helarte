import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HELADO } from '@core/models/helado.model';

@Injectable({
  providedIn: 'root'
})
export class HeladosService {

  idHelado = 'q1vsEEfIjt9BTgbDHSSE';
  docRef = this.firestore.collection<HELADO>('Productos').doc(this.idHelado);

  constructor(
    private firestore: AngularFirestore,
  ) { }

  // tslint:disable-next-line: typedef
  public createHelado(data: Partial<HELADO>) {
    return this.docRef.collection('Helados').add(data);
  }


  // tslint:disable-next-line: typedef
  public getHelado(codigo: string) {
    return this.docRef.collection('Helados', ref => ref.
       where('codigo', '==', codigo)).snapshotChanges();
  }

  // tslint:disable-next-line: typedef
  public getHelados() {
    return this.docRef.collection('Helados', ref => ref.
            orderBy('codigo', 'asc')).snapshotChanges();
  }

  // tslint:disable-next-line: typedef
  public updateHelado(documentId: string, partialData: Partial<HELADO>){
    this.docRef.collection('Helados').doc(documentId).
    update(partialData);
  }


  // tslint:disable-next-line: typedef
  public deleteHelado(documentId: string) {
    this.docRef.collection('Helados').doc(documentId).delete();
  }
}
