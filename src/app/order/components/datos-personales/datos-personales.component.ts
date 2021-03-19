import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product.model';
import { User } from '@core/models/user';
import { AuthService } from '@core/services/auth/auth.service';
import { CartService } from '@core/services/cart/cart.service';
import { UsersService } from '@core/services/users/users.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})
export class DatosPersonalesComponent implements OnInit {

  products$: Observable<Product[]>;
  displayedColumns: string[] = ['Imagen', 'Producto', 'Adicionales', 'Fruta', 'Precio'];
  email: string;
  usuario: User[];
  user: User;
  products: Product[];

  public user$: Observable<User> = this.authService.afa.user;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private userService: UsersService
  ) {
    this.products$ = this.cartService.cart$
    .pipe(map((products: []) => {
      const distintos = [...new Set(products)];
      return distintos;
    }));
    console.log(this.products$);
    this.user$ = this.authService.hasUser();
    }

    // tslint:disable-next-line:typedef
    getTotalPrice() {
      return this.cartService.totalCart();
    }

  ngOnInit(): void {
    this.authService.hasUser().subscribe(
      data => {
        this.email = data.email;
        this.getUsuario(this.email);
      }
    );

    this.getProducts();
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

    // tslint:disable-next-line:typedef
  getProducts(){
    this.products = this.cartService.getProducts();
    this.recorrerProductos(this.products);
  }

  // tslint:disable-next-line:typedef
  recorrerProductos(products: Product[]){
    products.forEach(product => {
      console.log(product);
      this.ingredientesProducto(product);
    });
  }

  // tslint:disable-next-line:typedef
  ingredientesProducto(product: Product){
    if (product.sabores !== null){
      product.sabores.forEach(sabor => console.log(sabor));
    }
    if (product.syrups !== null) {
      product.syrups.forEach(syrup => console.log(syrup));
    }
    if (product.toppingsD !== null) {
      product.toppingsD.forEach(toppingd => console.log(toppingd));
    }
    if (product.crema !== null) {
      console.log(product.crema);
    }
    if (product.fruta !== null) {
      product.fruta.forEach(fruit => console.log(fruit));
    }
    if (product.toppingsS !== null) {
      product.toppingsS.forEach(toppings => console.log(toppings));
    }
  }

}
