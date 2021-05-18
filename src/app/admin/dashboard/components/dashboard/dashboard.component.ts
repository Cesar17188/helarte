import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ComprobantesService } from '@core/services/comprobantes/comprobantes.service';
import * as firebase from 'firebase';
import { COMPROBANTE } from '@core/models/comprobante.model';
import { Product } from '@core/models/product.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    private breakpointObserver: BreakpointObserver,
    private comprobanteService: ComprobantesService,
    ) {}

  comprobantes: COMPROBANTE[];
  comprobantesDiario: COMPROBANTE[];
  comprobantesMes: COMPROBANTE[] = null;
  diaEnMilisegundos = 24 * 60 * 60 * 1000;
  mesEnMilisegundos = 4 * 7 * 24 * 60 * 60 * 1000;
  actualDate = new Date();
  ayer = new Date(this.actualDate.getTime() - this.diaEnMilisegundos);
  manana = new Date(this.actualDate.getTime() + this.diaEnMilisegundos);
  mesAnterior = new Date(this.actualDate.getTime() - this.mesEnMilisegundos);
  totalDiario = 0;
  totalMes = 0;

  // Totales diarios

  // Helados
  totalDiarioConoSimple = 0;
  totalDiarioConoDoble = 0;
  totalDiarioTulipanSimple = 0;
  totalDiarioTulipanDoble = 0;
  totalDiarioCopa = 0;
  totalDiarioMedioLitro = 0;
  totalDiarioLitro = 0;
  totalDiarioBrownie = 0;
  totalDiarioBananaSplit = 0;

  // Crepes
  totalDiarioCrepeDulce = 0;
  totalDiarioCrepeSal = 0;
  totalDiarioWafle = 0;

  // Arepas
  totalDiarioArepaPollo = 0;
  totalDiarioArepaCarneMechada = 0;

  // Shakes
  totalDiarioMilkShake = 0;
  totalDiarioShake = 0;

  // Cafes
  totalDiarioExpreso = 0;
  totalDiarioAmericano = 0;
  totalDiarioCarajillo = 0;
  totalDiarioCapuchino = 0;
  totalDiarioMocaccino = 0;
  totalDiarioChocolate = 0;
  totalDiarioFrapucchino = 0;
  totalDiarioTe = 0;
  totalDiarioLatte = 0;

// Totales mensuales

// Helados
  totalMesConoSimple = 0;
  totalMesConoDoble = 0;
  totalMesTulipanSimple = 0;
  totalMesTulipanDoble = 0;
  totalMesCopa = 0;
  totalMesMedioLitro = 0;
  totalMesLitro = 0;
  totalMesBrownie = 0;
  totalMesBananaSplit = 0;

  // Crepes
  totalMesCrepeDulce = 0;
  totalMesCrepeSal = 0;
  totalMesWafle = 0;

  // Arepas
  totalMesArepaPollo = 0;
  totalMesArepaCarneMechada = 0;

  // Shakes
  totalMesMilkShake = 0;
  totalMesShake = 0;

  // Cafes
  totalMesExpreso = 0;
  totalMesAmericano = 0;
  totalMesCarajillo = 0;
  totalMesCapuchino = 0;
  totalMesMocaccino = 0;
  totalMesChocolate = 0;
  totalMesFrapucchino = 0;
  totalMesTe = 0;
  totalMesLatte = 0;


  MESES = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  mesActual = this.MESES[this.actualDate.getMonth()];

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, total: this.totalDiario },
          { title: 'Card 2', cols: 1, rows: 1, total: this.totalMes },
          { title: 'Card 3', cols: 1, rows: 1, total: 0 },
          { title: 'Card 4', cols: 1, rows: 1, total: 0 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1, total: this.totalDiario},
        { title: 'Card 2', cols: 1, rows: 1, total: this.totalMes },
        { title: 'Card 3', cols: 1, rows: 2, total: 0 },
        { title: 'Card 4', cols: 1, rows: 1, total: 0 }
      ];
    })
  );

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.fetchComprobantesMes();
    this.fetchComprobantesDia();
  }


  // tslint:disable-next-line:typedef
  fetchComprobantesDia(){
    this.comprobanteService.getAllComprobantesDía(this.ayer, this.manana)
    .subscribe(data => {
      this.comprobantesDiario = data.map( e => {
        return {
          // tslint:disable-next-line:no-string-literal
          fecha: e.payload.doc.data()['fecha'],
          // tslint:disable-next-line:no-string-literal
          cliente: e.payload.doc.data()['cliente'],
          // tslint:disable-next-line:no-string-literal
          products: e.payload.doc.data()['products'],
          // tslint:disable-next-line:no-string-literal
          total: e.payload.doc.data()['total']
        };
      });
      this.getTotalDia(this.comprobantesDiario);
    });
  }

  // tslint:disable-next-line:typedef
  getTotalDia(comprobantes: COMPROBANTE[]) {
    comprobantes.forEach((comprobante) => {
      this.totalDiario += comprobante.total;
      this.getProductsDia(Array.from(comprobante.products));
    });
  }

  // tslint:disable-next-line:typedef
  getProductsDia(products: Product[]){
    products.forEach((product) => {
      const prods = Object.values(product);
      prods.forEach((producto) => {
        if (producto.producto === 'Cono Simple'){
          this.totalDiarioConoSimple += 1;
        }
        if (producto.producto === 'Cono Doble'){
          this.totalDiarioConoDoble += 1;
        }
        if (producto.producto === 'Tulipan Simple'){
          this.totalDiarioTulipanSimple += 1;
        }
        if (producto.producto === 'Tulipan Doble'){
          this.totalDiarioTulipanDoble += 1;
        }
        if (producto.producto === 'Copa'){
          this.totalDiarioCopa += 1;
        }
        if (producto.producto === 'Medio Litro'){
          this.totalDiarioMedioLitro += 1;
        }
        if (producto.producto === 'Litro'){
          this.totalDiarioLitro += 1;
        }
        if (producto.producto === 'Brownie'){
          this.totalDiarioBrownie += 1;
        }
        if (producto.producto === 'Banana Split'){
          this.totalDiarioBananaSplit += 1;
        }
        if (producto.producto === 'Crepe de sal'){
          this.totalDiarioCrepeSal += 1;
        }
        if (producto.producto === 'Crepe de dulce'){
          this.totalDiarioCrepeDulce += 1;
        }
        if (producto.producto === 'Wafle'){
          this.totalDiarioWafle += 1;
        }
        if (producto.producto === 'Milkshake'){
          this.totalDiarioMilkShake += 1;
        }
        if (producto.producto === 'Shake'){
          this.totalDiarioShake += 1;
        }
        if (producto.producto === 'Arepa de pollo'){
          this.totalDiarioArepaPollo += 1;
        }
        if (producto.producto === 'Arepa de carne mechada'){
          this.totalDiarioArepaCarneMechada += 1;
        }
        if (producto.producto === 'Americano'){
          this.totalDiarioAmericano += 1;
        }
        if (producto.producto === 'Té'){
          this.totalDiarioTe += 1;
        }
        if (producto.producto === 'Carajillo'){
          this.totalDiarioCarajillo += 1;
        }
        if (producto.producto === 'Expreso'){
          this.totalDiarioExpreso += 1;
        }
        if (producto.producto === 'Chocolate'){
          this.totalDiarioChocolate += 1;
        }
        if (producto.producto === 'Frapucchino'){
          this.totalDiarioFrapucchino += 1;
        }
        if (producto.producto === 'Capuchino'){
          this.totalDiarioCapuchino += 1;
        }
        if (producto.producto === 'Moccacino'){
          this.totalDiarioMocaccino += 1;
        }
        if (producto.producto === 'Latte'){
          this.totalDiarioLatte += 1;
        }
      });
    });
  }

  // tslint:disable-next-line:typedef
  fetchComprobantesMes(){
    this.comprobanteService.getAllComprobantesMes(this.mesAnterior, this.actualDate)
    .subscribe(data => {
      this.comprobantesMes = data.map( e => {
        return {
          // tslint:disable-next-line:no-string-literal
          fecha: e.payload.doc.data()['fecha'],
          // tslint:disable-next-line:no-string-literal
          cliente: e.payload.doc.data()['cliente'],
          // tslint:disable-next-line:no-string-literal
          products: e.payload.doc.data()['products'],
          // tslint:disable-next-line:no-string-literal
          total: e.payload.doc.data()['total']
        };
      });
      this.getTotalMes(this.comprobantesMes);
    });
  }

  // tslint:disable-next-line:typedef
  getTotalMes(comprobantes: COMPROBANTE[]) {
    comprobantes.forEach((comprobante) => {
      this.totalMes += comprobante.total;
      const productos = this.listProductsToArray(comprobante.products);
      this.getProductosMes(productos);
    });
  }

  // tslint:disable-next-line:typedef
  getProductosMes(products: Product[]){
      products.forEach((product) => {
        const prods = Object.values(product);
        prods.forEach((producto) => {
        if (producto.producto === 'Cono Simple'){
          this.totalMesConoSimple += 1;
        }
        if (producto.producto === 'Cono Doble'){
          this.totalMesConoDoble += 1;
        }
        if (producto.producto === 'Tulipan Simple'){
          this.totalMesTulipanSimple += 1;
        }
        if (producto.producto === 'Tulipan Doble'){
          this.totalMesTulipanDoble += 1;
        }
        if (producto.producto === 'Copa'){
          this.totalMesCopa += 1;
        }
        if (producto.producto === 'Medio Litro'){
          this.totalMesMedioLitro += 1;
        }
        if (producto.producto === 'Litro'){
          this.totalMesLitro += 1;
        }
        if (producto.producto === 'Brownie'){
          this.totalMesBrownie += 1;
        }
        if (producto.producto === 'Banana Split'){
          this.totalMesBananaSplit += 1;
        }
        if (producto.producto === 'Crepe de sal'){
          this.totalMesCrepeSal += 1;
        }
        if (producto.producto === 'Crepe de dulce'){
          this.totalMesCrepeDulce += 1;
        }
        if (producto.producto === 'Wafle'){
          this.totalMesWafle += 1;
        }
        if (producto.producto === 'Milkshake'){
          this.totalMesMilkShake += 1;
        }
        if (producto.producto === 'Shake'){
          this.totalMesShake += 1;
        }
        if (producto.producto === 'Arepa de pollo'){
          this.totalMesArepaPollo += 1;
        }
        if (producto.producto === 'Arepa de carne mechada'){
          this.totalMesArepaCarneMechada += 1;
        }
        if (producto.producto === 'Americano'){
          this.totalMesAmericano += 1;
        }
        if (producto.producto === 'Té'){
          this.totalMesTe += 1;
        }
        if (producto.producto === 'Carajillo'){
          this.totalMesCarajillo += 1;
        }
        if (producto.producto === 'Expreso'){
          this.totalMesExpreso += 1;
        }
        if (producto.producto === 'Chocolate'){
          this.totalMesChocolate += 1;
        }
        if (producto.producto === 'Frapucchino'){
          this.totalMesFrapucchino += 1;
        }
        if (producto.producto === 'Capuchino'){
          this.totalMesCapuchino += 1;
        }
        if (producto.producto === 'Moccacino'){
          this.totalMesMocaccino += 1;
        }
        if (producto.producto === 'Latte'){
          this.totalMesLatte += 1;
        }
        });
      });
  }

  // tslint:disable-next-line:typedef
  listProductsToArray(products){
    const productsArray = [];
    productsArray.push(products);
    // console.log(productsArray);
    return productsArray;
  }
}
