import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { CartService } from '@core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;
  title = 'helados y crepes';
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

  ngOnInit(): void {
  }

}
