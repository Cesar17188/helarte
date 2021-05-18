import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '@core/models/user';
import { AuthService } from '@core/services/auth/auth.service';
import { UsersService } from '@core/services/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  newUser = [];
  user: User;
  img: any;

  constructor(
    public afa: AngularFireAuth,
    private authServices: AuthService,
    private userServices: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.email) {
        this.getUser(params.email);
      }
    });
  }

  // tslint:disable-next-line:typedef
  updateShake(data) {
    this.userServices.updateUser(this.newUser[0].id, data);
    this.router.navigate(['./admin/users']);
  }

  // tslint:disable-next-line:typedef
  createUser(data) {
    const user = data;
    this.userServices.createUser(user).then(resp => {
      this.router.navigate(['./admin/users']);
    })
    .catch(error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  getUser(email: string) {
    this.userServices.getUser(email).subscribe(data => {
      this.newUser = data.map ( e => {
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
      this.user = this.newUser[0];
    });
  }


}
