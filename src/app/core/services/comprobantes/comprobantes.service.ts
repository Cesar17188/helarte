import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { COMPROBANTE } from '@core/models/comprobante.model';

@Injectable({
  providedIn: 'root'
})
export class ComprobantesService {

  constructor(
    private firestore: AngularFirestore,
  ) { }

  // tslint:disable-next-line:typedef
  public createComprobante(data: COMPROBANTE) {
    return this.firestore.collection('comprobantes').add(data);
  }

  // tslint:disable-next-line:typedef
  public getComprobante(id: string) {
    return this.firestore.collection('comprobantes',
  ref => ref.where('identification', '==', id)).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public getAllComprobantes() {
    return this.firestore.collection('comprobantes',
    ref => ref.orderBy('fecha', 'desc')).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public getAllComprobantesMes(prevM: Date, actM: Date) {
    return this.firestore.collection('comprobantes',
    ref => ref.where('fecha', '>=', prevM)
    .where('fecha', '<=', actM)
    .orderBy('fecha', 'desc')).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public getAllComprobantesDía(prevD: Date, actD: Date) {
    return this.firestore.collection('comprobantes',
    ref => ref.where('fecha', '>=', prevD)
    .where('fecha', '<=', actD)
    .orderBy('fecha', 'desc')).snapshotChanges();
  }
}
