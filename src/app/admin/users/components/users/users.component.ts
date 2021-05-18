import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { UsersService } from '@core/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [];
  img: any;
  data: any;
  displayedColumns: string[] = ['nombre', 'email', 'role', 'actions'];

  constructor(
    private usersService: UsersService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  // tslint:disable-next-line:typedef
  fetchUsers() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data.map( e => {
        // tslint:disable-next-line:no-string-literal
        const ref = this.storage.storage.refFromURL(e.payload.doc.data()['photoURL']);
        this.img = ref.getDownloadURL();
        return {
          id: e.payload.doc.id,
          // tslint:disable-next-line:no-string-literal
          displayName: e.payload.doc.data()['displayName'],
          // tslint:disable-next-line:no-string-literal
          email: e.payload.doc.data()['email'],
          photoURL: this.img,
          // tslint:disable-next-line:no-string-literal
          password: e.payload.doc.data()['password'],
          // tslint:disable-next-line:no-string-literal
          uid: e.payload.doc.data()['uid'],
          // tslint:disable-next-line:no-string-literal
          providerId: e.payload.doc.data()['providerId'],
          // tslint:disable-next-line:no-string-literal
          phoneNumber: e.payload.doc.data()['phoneNumber'],
          // tslint:disable-next-line:no-string-literal
          role: e.payload.doc.data()['role']
        };
      });
      console.log(this.users);
    });
  }

}
