import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LinkMenuItem } from 'ngx-auth-firebaseui';
import { AuthService } from '@core/services/auth/auth.service';
import { CartService } from '@core/services/cart/cart.service';
import { AuthComponent } from 'ngx-auth-firebaseui';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@core/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;
  title = 'helados y crepes';
  public user$: Observable<User> = this.authService.afa.user;
  constructor(
    private cartService: CartService,
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService
  ) {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
  }

  links: LinkMenuItem[];

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  openLogin() {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '80%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('login cerrado');
    });
  }

}
