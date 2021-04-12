import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { fromDocRef } from '@angular/fire/firestore';
import * as firebase from 'firebase';
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
import { delay, map } from 'rxjs/operators';
import { InventarioSyrupsService } from '@core/services/inventario/inventario-syrups/inventario-syrups.service';
import { InventarioToppingDulceService } from '@core/services/inventario/inventario-topping-dulce/inventario-topping-dulce.service';
import { InventarioCremaService } from '@core/services/inventario/inventario-crema/inventario-crema.service';
import { InventarioFrutasService } from '@core/services/inventario/inventario-frutas/inventario-frutas.service';
import { InventarioToppingSalService } from '@core/services/inventario/inventario-topping-sal/inventario-topping-sal.service';

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
  nuevoStockSabor: number;
  listaStockSabores = new Array();
  listaStockSyrups = new Array();
  listaStockToppingsD = new Array();
  listaStockCrema = new Array();
  listaStockFrutas = new Array();
  listaStockToppingsS = new Array();
  varStockSabor = 0;
  varStockSyrup = 0;
  varStockToppingD = 0;
  varStockCrema = 0;
  varStockFruta = 0;
  varStockToppingS = 0;
  stockActualSabor: STOCK;
  stockActualSyrup: STOCK;
  stockActualToppingD: STOCK;
  stockActualCrema: STOCK;
  stockActualFruta: STOCK;
  stockActualToppingS: STOCK;
  stockFinaleSabor: STOCK;
  stockFinaleSyrup: STOCK;
  stockFinaleToppingD: STOCK;
  stockFinaleCrema: STOCK;
  stockFinaleFruta: STOCK;
  stockFinaleToppingS: STOCK;
  fecha: Date;

  public user$: Observable<User> = this.authService.afa.user;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private userService: UsersService,
    private inventarioSabores: InventarioSaboresService,
    private inventarioSyrups: InventarioSyrupsService,
    private inventarioToppingsD: InventarioToppingDulceService,
    private inventarioToppingsS: InventarioToppingSalService,
    private inventarioCrema: InventarioCremaService,
    private inventarioFruta: InventarioFrutasService
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
        this.componentesHelado(product, 15);
        break;
      case 'Cono doble':
        this.componentesHelado(product, 15);
        break;
      case 'Tulipan Simple':
        this.componentesHelado(product, 15);
        break;
      case 'Tulipan Doble':
        this.componentesHelado(product, 15);
        break;
      case 'Copa':
        this.componentesHelado(product, 15);
        break;
      case 'Medio Litro':
        this.componentesHelado(product, 500);
        break;
      case 'Litro':
        this.componentesHelado(product, 1000);
        break;
      case 'Crepe de dulce':
        this.componentesCrepeDulce(product, 15);
        break;
      case 'Crepe de sal':
        this.componentesCrepeSal(product, 30);
        break;
      case 'Milkshake':
        this.componentesMilkShake(product, 15);
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
  componentesHelado(product: Product, saborStock: number) {
    this.saboresProducto(product.sabores, saborStock);
    if (product.syrups !== null){
      this.syrupsProducto(product.syrups, 5);
    }
    if (product.toppingsD !== null){
      this.toppingsDProducto(product.toppingsD, 5);
    }
    if (product.crema !== null) {
      this.cremaProducto(product, 5);
    }
  }

  // tslint:disable-next-line:typedef
  componentesCrepeDulce(product: Product, saborStock: number) {
    this.saboresProducto(product.sabores, saborStock);
    this.frutasProducto(product.frutas, 10);
    this.toppingsDProducto(product.toppingsD, 5);
    if (product.syrups !== null){
      this.syrupsProducto(product.syrups, 5);
    }
    if (product.crema !== null) {
      this.cremaProducto(product, 5);
    }
  }

  // tslint:disable-next-line:typedef
  componentesCrepeSal(product: Product, toppingStock: number) {
    this.toppingsSProducto(product.toppingsS, toppingStock);
  }

  // tslint:disable-next-line:typedef
  componentesMilkShake(product: Product, stockIngrediente: number) {
    this.saboresProducto(product.sabores, stockIngrediente);
  }

  // tslint:disable-next-line:typedef
  componentesShake(product: Product) {
    this.frutasProducto(product.frutas, 20);
  }

  // tslint:disable-next-line:typedef
  cremaProducto(crema: Product, stockIngrediente: number){
      this.listaStockCrema.push({producto: crema.producto, codigo: crema.id, stock: stockIngrediente});
      console.log(this.listaStockCrema);
      const listaStocksCrema: STOCK = this.stockCrema();
      this.cambioStockCrema(listaStocksCrema);
  }

  // tslint:disable-next-line:typedef
  stockCrema(){
    let crema = 0;
    let cremaid: string;
    const listaCremaStock: STOCK = new Array();
    const listaCrema = this.listaStockCrema;
    listaCrema.forEach(cream => {
      crema += cream.stock;
      cremaid = cream.codigo;
    });
    if (crema !== 0){
      listaCremaStock.push({codigo: cremaid, stock: crema});
    }
    return listaCremaStock;
  }

   // tslint:disable-next-line:typedef
   cambioStockCrema(stocks: STOCK){
    const stockCrema = Object.values(stocks);
    stockCrema.forEach(stock => {
      this.varStockCrema = 0;
      console.log(stock);
      this.inventarioCrema.getStock()
      .pipe(delay(500))
      .subscribe(data => {
        this.stockActualSabor = data.map(e => {
          return {
            stock: e.payload.doc.data().stock
          };
        });
        this.varStockCrema = (this.stockActualSabor[0].stock - stock.stock);
        this.stockFinaleSabor = {stock: this.varStockCrema, fecha: firebase.default.firestore.FieldValue.serverTimestamp()};
        console.log(this.stockFinaleSabor);
      });
      try{
        this.inventarioCrema.createStock(this.stockFinaleSabor);
      }
      catch (err){
        console.log(err);
      }
    });
    // window.location.reload();
  }

  // tslint:disable-next-line:typedef
  saboresProducto(sabores: SABOR[], stockIngrediente: number){
    // tslint:disable-next-line:prefer-const
   sabores.forEach(sabor => {
     this.listaStockSabores.push({producto: sabor.producto, codigo: sabor.id, stock: stockIngrediente});
    });
   console.log(this.listaStockSabores);
   const listaSaboresStock: STOCK = this.stockSabores();
   this.cambioStockSabores(listaSaboresStock);
  }

  // tslint:disable-next-line:typedef
  stockSabores(){
    let mora = 0;
    let moraid: string;
    let zanahoriaNaranja = 0;
    let zanahoriaNaranjaid: string;
    let chicleSandia = 0;
    let chicleSandiaid: string;
    let chocolate = 0;
    let chocolateid: string;
    let mango = 0;
    let mangoid: string;
    let limonHiervaBuena = 0;
    let limonHiervaBuenaid: string;
    let cocoRalladoPasas = 0;
    let cocoRalladoPasasid: string;
    let rosasCerezas = 0;
    let rosasCerezasid: string;
    let maracuya = 0;
    let maracuyaid: string;
    let vainilla = 0;
    let vainillaid: string;
    let cafeAlmendras = 0;
    let cafeAlmendrasid: string;
    let guanabana = 0;
    let guanabanaid: string;
    const listaSaboresStock: STOCK = new Array();
    const listaSabores = this.listaStockSabores;
    listaSabores.forEach(sabor => {
      switch (sabor.producto){
        case 'Chocolate':
          chocolate += sabor.stock;
          chocolateid = sabor.codigo;
          break;
        case 'Mora':
          mora += sabor.stock;
          moraid = sabor.codigo;
          break;
        case 'Vainilla':
          vainilla += sabor.stock;
          vainillaid = sabor.codigo;
          break;
        case 'Zanahoria y Naranja':
          zanahoriaNaranja += sabor.stock;
          zanahoriaNaranjaid = sabor.codigo;
          break;
        case 'Chicle y Sandía':
          chicleSandia += sabor.stock;
          chicleSandiaid = sabor.codigo;
          break;
        case 'Mango':
          mango += sabor.stock;
          mangoid = sabor.codigo;
          break;
        case 'Limón y Hierva Buena':
          limonHiervaBuena += sabor.stock;
          limonHiervaBuenaid = sabor.codigo;
          break;
        case 'Coco y Coco Rallado Pasas':
          cocoRalladoPasas += sabor.stock;
          cocoRalladoPasasid = sabor.codigo;
          break;
        case 'Rosas y Cerezas':
          rosasCerezas += sabor.stock;
          rosasCerezasid = sabor.codigo;
          break;
        case 'Maracuya':
          maracuya += sabor.stock;
          maracuyaid = sabor.codigo;
          break;
        case 'Cafe y Almendras':
          cafeAlmendras += sabor.stock;
          cafeAlmendrasid = sabor.codigo;
          break;
        case 'Guanabana':
          guanabana += sabor.stock;
          guanabanaid = sabor.codigo;
          break;
      }
    });
    if (chocolate !== 0) {
      listaSaboresStock.push({codigo: chocolateid, stock: chocolate});
    }
    if (mora !== 0) {
      listaSaboresStock.push({codigo: moraid, stock: mora});
    }
    if (vainilla !== 0) {
      listaSaboresStock.push({codigo: vainillaid, stock: vainilla});
    }
    if (zanahoriaNaranja !== 0) {
      listaSaboresStock.push({codigo: zanahoriaNaranjaid, stock: zanahoriaNaranja});
    }
    if (chicleSandia !== 0) {
      listaSaboresStock.push({codigo: chicleSandiaid, stock: chicleSandia});
    }
    if (mango !== 0) {
      listaSaboresStock.push({codigo: mangoid, stock: mango});
    }
    if (limonHiervaBuena !== 0) {
      listaSaboresStock.push({codigo: limonHiervaBuenaid, stock: limonHiervaBuena});
    }
    if (cocoRalladoPasas !== 0) {
      listaSaboresStock.push({codigo: cocoRalladoPasasid, stock: cocoRalladoPasas});
    }
    if (rosasCerezas !== 0) {
      listaSaboresStock.push({codigo: rosasCerezasid, stock: rosasCerezas});
    }
    if (maracuya !== 0) {
      listaSaboresStock.push({codigo: maracuyaid, stock: maracuya});
    }
    if (cafeAlmendras !== 0) {
      listaSaboresStock.push({codigo: cafeAlmendrasid, stock: cafeAlmendras});
    }
    if (guanabana !== 0) {
      listaSaboresStock.push({codigo: guanabanaid, stock: guanabana});
    }
    return listaSaboresStock;
  }

  // tslint:disable-next-line:typedef
  cambioStockSabores(stocks: STOCK){
    const stockSabores = Object.values(stocks);
    stockSabores.forEach(stock => {
      this.varStockSabor = 0;
      console.log(stock);
      this.inventarioSabores.getStock(stock.codigo)
      .pipe(delay(500))
      .subscribe(data => {
        this.stockActualSabor = data.map(e => {
          return {
            stock: e.payload.doc.data().stock
          };
        });
        this.varStockSabor = (this.stockActualSabor[0].stock - stock.stock);
        this.stockFinaleSabor = {stock: this.varStockSabor, fecha: firebase.default.firestore.FieldValue.serverTimestamp()};
        console.log(this.stockFinaleSabor);
      });
      try{
        this.inventarioSabores.createStock(stock.codigo, this.stockFinaleSabor);
        alert('Se ha ingresado el stock exitosamente');
      }
      catch (err){
        alert('No se ha ingresado el stock');
      }
    });
    // window.location.reload();
  }

  // tslint:disable-next-line:typedef
  nuevoStockSabores(id: string){
    console.log(id, this.nuevoStockSabor);
    const stockSabor: STOCK = {
      stock: this.nuevoStockSabor
    };
    console.log(id, stockSabor);
    // this.inventarioSabores.createStock(id, stockSabor);
  }

  // tslint:disable-next-line:typedef
  syrupsProducto(syrups: SYRUP[], stockIngrediente: number){
    syrups.forEach(syrup => {
      console.log(syrup.producto);
      this.listaStockSyrups.push({producto: syrup.producto, codigo: syrup.id, stock: stockIngrediente});
    });
    console.log(this.listaStockSyrups);
    const listaStocksSyrups: STOCK = this.stockSyrups();
    this.cambioStockSyrups(listaStocksSyrups);
  }

  // tslint:disable-next-line:typedef
  stockSyrups(){
    let fresa = 0;
    let fresaid: string;
    let mani = 0;
    let maniid: string;
    let manjar = 0;
    let manjarid: string;
    let chocolate = 0;
    let chocolateid: string;
    let chicles = 0;
    let chiclesid: string;
    const listaStocksSyrupses: STOCK = new Array();
    const listaSyrupses = this.listaStockSyrups;
    listaSyrupses.forEach(syrup => {
      switch (syrup.producto){
        case 'Fresa':
          fresa += syrup.stock;
          fresaid = syrup.codigo;
          break;
        case 'Maní':
          mani += syrup.stock;
          maniid = syrup.codigo;
          break;
        case 'Manjar':
          manjar += syrup.stock;
          manjarid = syrup.codigo;
          break;
        case 'Chocolate':
          chocolate += syrup.stock;
          chocolateid = syrup.codigo;
          break;
        case 'Chicles':
          chicles += syrup.stock;
          chiclesid = syrup.codigo;
          break;
      }
    });
    if (fresa !== 0) {
      listaStocksSyrupses.push({codigo: fresaid, stock: fresa});
    }
    if (mani !== 0) {
      listaStocksSyrupses.push({codigo: maniid, stock: mani});
    }
    if (manjar !== 0) {
      listaStocksSyrupses.push({codigo: manjarid, stock: manjar});
    }
    if (chocolate !== 0) {
      listaStocksSyrupses.push({codigo: chocolateid, stock: chocolate});
    }
    if (chicles !== 0) {
      listaStocksSyrupses.push({codigo: chiclesid, stock: chicles});
    }
    return listaStocksSyrupses;
  }

   // tslint:disable-next-line:typedef
   cambioStockSyrups(stocks: STOCK){
    const stockSyrups = Object.values(stocks);
    stockSyrups.forEach(stock => {
      this.varStockSyrup = 0;
      console.log(stock);
      this.inventarioSyrups.getStock(stock.codigo)
      .pipe(delay(500))
      .subscribe(data => {
        this.stockActualSyrup = data.map(e => {
          return {
            stock: e.payload.doc.data().stock
          };
        });
        this.varStockSyrup = (this.stockActualSyrup[0].stock - stock.stock);
        this.stockFinaleSyrup = {stock: this.varStockSyrup, fecha: firebase.default.firestore.FieldValue.serverTimestamp()};
        console.log(this.stockFinaleSyrup);
      });
      try{
        this.inventarioSyrups.createStock(stock.codigo, this.stockFinaleSyrup);
      }
      catch (err){
        console.log(err);
      }
    });
  }

  // tslint:disable-next-line:typedef
  toppingsDProducto(toppingsD: TOPPING[], stockIngrediente: number){
    toppingsD.forEach(toppingD => {
      console.log(toppingD.producto);
      this.listaStockToppingsD.push({producto: toppingD.producto, codigo: toppingD.id, stock: stockIngrediente});
    });
    console.log(this.listaStockToppingsD);
    const listaStocksToppingsD: STOCK = this.stockToppingsD();
    this.cambioStockToppingsD(listaStocksToppingsD);
  }

  // tslint:disable-next-line:typedef
  stockToppingsD() {
    let granola = 0;
    let granolaid: string;
    let oreo = 0;
    let oreoid: string;
    let chispasChocolate = 0;
    let chispasChocolateid: string;
    let almendras = 0;
    let almendrasid: string;
    let nueces = 0;
    let nuecesid: string;
    let arandanos = 0;
    let arandanosid: string;
    let grajeas = 0;
    let grajeasid: string;
    let coco = 0;
    let cocoid: string;
    const listaStocksToppingsD: STOCK =  new Array();
    const listaToppingsD = this.listaStockToppingsD;
    listaToppingsD.forEach(toppingD => {
      switch (toppingD.producto) {
        case 'Granola':
          granola += toppingD.stock;
          granolaid = toppingD.codigo;
          break;
        case 'Oreo':
          oreo += toppingD.stock;
          oreoid = toppingD.codigo;
          break;
        case 'Chispas de chocolate':
          chispasChocolate += toppingD.stock;
          chispasChocolateid = toppingD.codigo;
          break;
        case 'Almendras':
          almendras += toppingD.stock;
          almendrasid = toppingD.codigo;
          break;
        case 'Nueces':
          nueces += toppingD.stock;
          nuecesid = toppingD.codigo;
          break;
        case 'Arándanos':
          arandanos += toppingD.stock;
          arandanosid = toppingD.codigo;
          break;
        case 'Grajeas':
          grajeas += toppingD.stock;
          grajeasid = toppingD.codigo;
          break;
        case 'Coco':
          coco += toppingD.stock;
          cocoid = toppingD.codigo;
          break;
      }
    });
    if (granola !== 0){
      listaStocksToppingsD.push({codigo: granolaid, stock: granola});
    }
    if (oreo !== 0){
      listaStocksToppingsD.push({codigo: oreoid, stock: oreo});
    }
    if (chispasChocolate !== 0){
      listaStocksToppingsD.push({codigo: chispasChocolateid, stock: chispasChocolate});
    }
    if (almendras !== 0){
      listaStocksToppingsD.push({codigo: almendrasid, stock: almendras});
    }
    if (nueces !== 0){
      listaStocksToppingsD.push({codigo: nuecesid, stock: nueces});
    }
    if (arandanos !== 0){
      listaStocksToppingsD.push({codigo: arandanosid, stock: arandanos});
    }
    if (grajeas !== 0){
      listaStocksToppingsD.push({codigo: grajeasid, stock: grajeas});
    }
    if (coco !== 0){
      listaStocksToppingsD.push({codigo: cocoid, stock: coco});
    }
    return listaStocksToppingsD;
  }

   // tslint:disable-next-line:typedef
   cambioStockToppingsD(stocks: STOCK){
    const stockToppingsD = Object.values(stocks);
    stockToppingsD.forEach(stock => {
      this.varStockToppingD = 0;
      console.log(stock);
      this.inventarioToppingsD.getStock(stock.codigo)
      .pipe(delay(500))
      .subscribe(data => {
        this.stockActualToppingD = data.map(e => {
          return {
            stock: e.payload.doc.data().stock
          };
        });
        this.varStockToppingD = (this.stockActualToppingD[0].stock - stock.stock);
        this.stockFinaleToppingD = {stock: this.varStockToppingD, fecha: firebase.default.firestore.FieldValue.serverTimestamp()};
        console.log(this.stockFinaleToppingD);
      });
      try{
        this.inventarioToppingsD.createStock(stock.codigo, this.stockFinaleToppingD);
      }
      catch (err){
        console.log(err);
      }
    });
    // window.location.reload();
  }


  // tslint:disable-next-line:typedef
  toppingsSProducto(toppingsS: TOPPING[], stockIngrediente: number){
    toppingsS.forEach(toppingS => {
      console.log(toppingS);
      this.listaStockToppingsS.push({producto: toppingS.producto, codigo: toppingS.id, stock: stockIngrediente});
    });
    console.log(this.listaStockToppingsS);
    const listaStocksToppingSS: STOCK = this.stockToppingsS();
    this.cambioStockToppingsS(listaStocksToppingSS);
  }

  // tslint:disable-next-line:typedef
  stockToppingsS(){
    let jamon = 0;
    let jamonid: string;
    let queso = 0;
    let quesoid: string;
    let pollo = 0;
    let polloid: string;
    let salami = 0;
    let salamiid: string;
    const listaStocksToppingsS: STOCK =  new Array();
    const listaToppingsS = this.listaStockToppingsS;
    listaToppingsS.forEach(ToppingS => {
      switch (ToppingS.producto){
        case 'Jamón':
          jamon += ToppingS.stock;
          jamonid = ToppingS.codigo;
          break;
        case 'Queso':
          queso += ToppingS.stock;
          quesoid = ToppingS.codigo;
          break;
        case 'Pollo':
          pollo += ToppingS.stock;
          polloid = ToppingS.codigo;
          break;
        case 'Salami':
          salami += ToppingS.stock;
          salamiid = ToppingS.codigo;
          break;
      }
    });
    if ( jamon !== 0){
      listaStocksToppingsS.push({codigo: jamonid, stock: jamon});
    }
    if ( queso !== 0){
      listaStocksToppingsS.push({codigo: quesoid, stock: queso});
    }
    if ( pollo !== 0){
      listaStocksToppingsS.push({codigo: polloid, stock: pollo});
    }
    if ( salami !== 0){
      listaStocksToppingsS.push({codigo: salamiid, stock: salami});
    }
    return listaStocksToppingsS;
  }

  // tslint:disable-next-line:typedef
  cambioStockToppingsS(stocks: STOCK){
    const stockToppingsS = Object.values(stocks);
    stockToppingsS.forEach(stock => {
      this.varStockToppingS = 0;
      console.log(stock);
      this.inventarioToppingsS.getStock(stock.codigo)
        .pipe(delay(500))
        .subscribe(data => {
          this.stockActualToppingS = data.map(e => {
            return {
              stock: e.payload.doc.data().stock
            };
          });
          this.varStockToppingS = (this.stockActualToppingS[0].stock - stock.stock);
          this.stockFinaleToppingS = {stock: this.varStockToppingS, fecha: firebase.default.firestore.FieldValue.serverTimestamp()};
          console.log(this.stockFinaleToppingS);
        });
      try{
        this.inventarioToppingsS.createStock(stock.codigo, this.stockFinaleToppingS);
        alert('Se ha ingresado el topping correctamente');
      }
      catch (err){
        alert('No se ha ingresado el topping correctamente');
      }
    });
    // window.location.reload();
  }

  // tslint:disable-next-line:typedef
  frutasProducto(frutas: FRUTA[], stockIngrediente: number){
    frutas.forEach(fruta => {
      console.log(fruta.producto);
      this.listaStockFrutas.push({producto: fruta.producto, codigo: fruta.id, stock: stockIngrediente});
    });
    console.log(this.listaStockFrutas);
    const listaStocksFrutas: STOCK = this.stockFrutas();
    this.cambioStockFrutas(listaStocksFrutas);
  }

  // tslint:disable-next-line:typedef
  stockFrutas() {
    let durazno = 0;
    let duraznoid: string;
    let banana = 0;
    let bananaid: string;
    let fresa = 0;
    let fresaid: string;
    let mango = 0;
    let mangoid: string;
    let uva = 0;
    let uvaid: string;
    const listaStocksFrutas: STOCK = new Array();
    const listaFrutas = this.listaStockFrutas;
    listaFrutas.forEach(fruta => {
      switch (fruta.producto){
        case 'Durazno':
          durazno += fruta.stock;
          duraznoid = fruta.codigo;
          break;
        case 'Banana':
          banana += fruta.stock;
          bananaid = fruta.codigo;
          break;
        case 'Fresa':
          fresa += fruta.stock;
          fresaid = fruta.codigo;
          break;
        case 'Mango':
          mango += fruta.stock;
          mangoid = fruta.codigo;
          break;
        case 'Uva':
          uva += fruta.stock;
          uvaid = fruta.codigo;
          break;
      }
    });
    if (durazno !== 0){
      listaStocksFrutas.push({codigo: duraznoid, stock: durazno});
    }
    if (banana !== 0){
      listaStocksFrutas.push({codigo: bananaid, stock: banana});
    }
    if (fresa !== 0){
      listaStocksFrutas.push({codigo: fresaid, stock: fresa});
    }
    if (mango !== 0) {
      listaStocksFrutas.push({codigo: mangoid, stock: mango});
    }
    if (uva !== 0) {
      listaStocksFrutas.push({codigo: uvaid, stock: uva});
    }
    return listaStocksFrutas;
  }

  // tslint:disable-next-line:typedef
  cambioStockFrutas(stocks: STOCK){
    const stockFrutas = Object.values(stocks);
    stockFrutas.forEach(stock => {
      this.varStockFruta = 0;
      console.log(stock);
      this.inventarioFruta.getStock(stock.codigo)
      .pipe(delay(500))
      .subscribe(data => {
        this.stockActualFruta = data.map(e => {
          return {
            stock: e.payload.doc.data().stock
          };
        });
        this.varStockFruta = (this.stockActualFruta[0].stock - stock.stock);
        this.stockFinaleFruta = {stock: this.varStockFruta, fecha: firebase.default.firestore.FieldValue.serverTimestamp()};
        console.log(this.stockFinaleFruta);
      });
      try{
        this.inventarioFruta.createStock(stock.codigo, this.stockFinaleFruta);
        alert('Se ha ingresado La fruta exitosamente');
      }
      catch (err){
        alert('No se ha ingresado la fruta debido a ');
      }
    });
    // window.location.reload();
  }

}
