import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { TOPPING } from '@core/models/topping.model';
import { ToppingDulceService } from '@core/services/topping-dulce/topping-dulce.service';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.container.html',
  styleUrls: ['./toppings.container.scss']
})
// tslint:disable-next-line:component-class-suffix
export class ToppingsContainer implements OnInit {

  toppingsD: TOPPING[];
  data: any;
  img: any;

  constructor(
    private toppingService: ToppingDulceService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.fetchToppings();
  }

  // Recuperación de los toppings de dulce desde el servicio de toppings de dulce 'toppingsDulceService'
  // tslint:disable-next-line:typedef
  fetchToppings() {
    this.toppingService.getAllToppingD().subscribe(data => {
      // Envía los toppings de dulce al componente gráfico components/toppingsD/toppingsD.component
      this.toppingsD = data.map( e => {
        // tslint:disable-next-line: no-string-literal
        const ref = this.storage.storage.refFromURL(e.payload.doc.data()['image']);
        this.img = ref.getDownloadURL();
        return {
          id: e.payload.doc.id,
          codigo: e.payload.doc.data().codigo,
          producto: e.payload.doc.data().producto,
          img: this.img,
          descripcion_corta: e.payload.doc.data().descripcion_corta,
          descripcion_larga: e.payload.doc.data().descripcion_larga
        };
      });
    });
  }

  // tslint:disable-next-line:typedef
  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}
