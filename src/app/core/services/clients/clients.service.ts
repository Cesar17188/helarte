import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CLIENT } from '@core/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private firestore: AngularFirestore,
  ) { }

  // tslint:disable-next-line:typedef
  public createClient(data: CLIENT) {
    return this.firestore.collection('clientes').add(data);
  }

  // tslint:disable-next-line:typedef
  public getClient(id: string) {
    return this.firestore.collection('clientes',
    ref => ref.where('identification', '==', id)).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public getAllClients() {
    return this.firestore.collection('clientes',
    ref => ref.orderBy('name', 'desc')).snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public updateClient(id: string, data: Partial<CLIENT>) {
    this.firestore.collection('clientes')
    .doc(id).update(data);
  }
}
