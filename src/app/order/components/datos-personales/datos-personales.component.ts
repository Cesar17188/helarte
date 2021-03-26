import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { fromDocRef } from '@angular/fire/firestore';
import { FRUTA } from '@core/models/fruta.model';
import { Product } from '@core/models/product.model';
import { SABOR } from '@core/models/sabor.model';
import { STOCK } from '@core/models/stock.model';
import { SYRUP } from '@core/models/syrup.model';
import { TOPPING } from '@core/models/topping.model';
import { User } from '@core/models/user';
import { AuthService } from '@core/services/auth/auth.service';
import { CartService } from '@core/services/cart/cart.service';
import { InventarioSaboresService } from '@core/services/inventario/inventario-sabores/inventario-sabores.service';
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
    private userService: UsersService,
    private inventarioSabores: InventarioSaboresService
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
    this.products$.subscribe(product => {
      this.products = product.map (data => {
        return data;
      });
      console.log(this.products);
      this.recorrerProductos(this.products);
    });
  }

  // tslint:disable-next-line:typedef
  recorrerProductos(products: Product[]){
    products.forEach(product => {
      console.log(product);
      this.componentesProducto(product);
    });
  }

  // tslint:disable-next-line:typedef
  componentesProducto(product: Product) {
    switch (product.producto) {
      case 'Cono Simple':
        this.componentesHelado(product);
        break;
      case 'Cono doble':
        this.componentesHelado(product);
        break;
      case 'Tulipan Simple':
        this.componentesHelado(product);
        break;
      case 'Tulipan Doble':
        this.componentesHelado(product);
        break;
      case 'Copa':
        this.componentesHelado(product);
        break;
      case 'Medio Litro':
        this.componentesHelado(product);
        break;
      case 'Litro':
        this.componentesHelado(product);
        break;
      case 'Crepe de dulce':
        this.componentesCrepeDulce(product);
        break;
      case 'Crepe de sal':
        this.componentesCrepeSal(product);
        break;
      case 'Milkshake':
        this.componentesMilkShake(product);
        break;
      case 'Shake':
        this.componentesShake(product);
        break;
      default:
        console.log('Producto no existente');
        break;
    }
  }

  // tslint:disable-next-line:typedef
  componentesHelado(product: Product) {
    this.saboresProducto(product.sabores);
    if (product.syrups !== null){
      this.syrupsProducto(product.syrups);
    }
    if (product.toppingsD !== null){
      this.toppingsDProducto(product.toppingsD);
    }
    if (product.crema !== null) {
      this.cremaProducto(product);
    }
  }

  // tslint:disable-next-line:typedef
  componentesCrepeDulce(product: Product) {
    this.saboresProducto(product.sabores);
    this.frutasProducto(product.frutas);
    this.toppingsDProducto(product.toppingsD);
    if (product.syrups !== null){
      this.syrupsProducto(product.syrups);
    }
    if (product.crema !== null) {
      this.cremaProducto(product);
    }
  }

  // tslint:disable-next-line:typedef
  componentesCrepeSal(product: Product) {
    this.toppingsSProducto(product.toppingsS);
  }

  // tslint:disable-next-line:typedef
  componentesMilkShake(product: Product) {
    this.saboresProducto(product.sabores);
  }

  // tslint:disable-next-line:typedef
  componentesShake(product: Product) {
    this.frutasProducto(product.frutas);
  }

  // tslint:disable-next-line:typedef
  cremaProducto(product: Product){
    if (product.crema !== null) {
      console.log(product.crema);
    }
  }

  // tslint:disable-next-line:typedef
  saboresProducto(sabores: SABOR[]){
   sabores.forEach(sabor => console.log(sabor));
  }

  // tslint:disable-next-line:typedef
  syrupsProducto(syrups: SYRUP[]){
    syrups.forEach(syrup => console.log(syrup));
  }

  // tslint:disable-next-line:typedef
  toppingsDProducto(toppingsD: TOPPING[]){
    toppingsD.forEach(toppingD => console.log(toppingD));
  }

  // tslint:disable-next-line:typedef
  toppingsSProducto(toppingsS: TOPPING[]){
    toppingsS.forEach(toppingS => console.log(toppingS));
  }

  // tslint:disable-next-line:typedef
  frutasProducto(frutas: FRUTA[]){
    frutas.forEach(fruta => console.log(fruta));
  }

}
