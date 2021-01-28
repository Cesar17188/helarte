import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  // tslint:disable-next-line:typedef
  public getUser(email: string) {
    return this.firestore.collection('users',
    ref => ref.where('email', '==', email))
    .snapshotChanges();
  }

  // tslint:disable-next-line:typedef
  public getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }
}
