import { Component, OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth/auth.service';
import { User } from '@core/models/user';
import { UsersService } from '@core/services/users/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;
  public user$: Observable<User> = this.authService.afa.user;
  usuario: User[];
  user: any;
  isAdmin = false;

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
    ) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this.mobileQueryListener = () => changeDetectorRef.detectChanges();
      // tslint:disable-next-line: deprecation
      this.mobileQuery.addListener(this.mobileQueryListener);
      this.user$ = this.authService.hasUser();
    }

    ngOnInit(): void {
      this.user$.subscribe(data => {
        this.getUsuario(data.email);
      });
    }

    ngOnDestroy(): void {
      // tslint:disable-next-line: deprecation
      this.mobileQuery.removeListener(this.mobileQueryListener);
    }

    // tslint:disable-next-line:typedef
    getUsuario(email: string) {
      this.userService.getUser(email).subscribe( data => {
        this.usuario = data.map(e => {
          return {
            // tslint:disable-next-line:no-string-literal
            role: e.payload.doc.data()['role']
          };
        });
        this.userAdmin(this.usuario[0].role);
      });
    }

    // tslint:disable-next-line: member-ordering
    shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h =>
    h.test(window.location.host));

    // tslint:disable-next-line:typedef
    userAdmin(role: string) {
      if (role === 'ADMIN') {
        this.isAdmin = true;
      }
      console.log(this.isAdmin);
    }

}
