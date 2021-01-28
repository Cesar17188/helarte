import { Component, OnInit } from '@angular/core';
import { User } from '@core/models/user';
import { AuthService } from '@core/services/auth/auth.service';
import { UsersService } from '@core/services/users/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil-container',
  templateUrl: './perfil-container.component.html',
  styleUrls: ['./perfil-container.component.scss']
})
export class PerfilContainerComponent implements OnInit {

  email: string;
  usuario: User[];
  user: User;

  public user$: Observable<User> = this.authService.afa.user;

  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) {
    this.user$ = this.authService.hasUser();
  }

  ngOnInit(): void {
    this.authService.hasUser().subscribe(
      data => {
        this.email = data.email;
        this.getUsuario(this.email);
      }
    );
  }

  // tslint:disable-next-line:typedef
  getUsuario(email: string) {
    this.userService.getUser(email).subscribe(data => {
      this.usuario = data.map (e => {
        return {
          // tslint:disable-next-line:no-string-literal
          uid: e.payload.doc.data()['uid'],
          // tslint:disable-next-line:no-string-literal
          role: e.payload.doc.data()['role'],
          // tslint:disable-next-line:no-string-literal
          photoURL: e.payload.doc.data()['photoURL'],
          // tslint:disable-next-line:no-string-literal
          password: e.payload.doc.data()['password'],
          // tslint:disable-next-line:no-string-literal
          displayName: e.payload.doc.data()['displayName'],
          // tslint:disable-next-line:no-string-literal
          email: e.payload.doc.data()['email']
        };
      });
      this.user = this.usuario[0];
      console.log(this.user);
    });
  }
}
