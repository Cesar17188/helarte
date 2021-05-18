import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '@core/models/user';

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

  // tslint:disable-next-line:typedef
  public updateUser(documentId: string, partialData: Partial<User>){
    this.firestore.collection('users').doc(documentId).
                                 update(partialData);
  }

  // tslint:disable-next-line:typedef
  public createUser(data: User) {
    return this.firestore.collection('users').add(data);
  }


}
