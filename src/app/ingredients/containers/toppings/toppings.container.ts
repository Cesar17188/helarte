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

  // tslint:disable-next-line:typedef
  fetchToppings() {
    this.toppingService.getAllToppingD().subscribe(data => {
      this.toppingsD = data.map( e => {
        // tslint:disable-next-line: no-string-literal
        const ref = this.storage.storage.refFromURL(e.payload.doc.data()['image']);
        this.img = ref.getDownloadURL();
        return {
          // tslint:disable-next-line: no-string-literal
          codigo: e.payload.doc.data()['codigo'],
          // tslint:disable-next-line: no-string-literal
          producto: e.payload.doc.data()['producto'],
          img: this.img,
          // tslint:disable-next-line: no-string-literal
          descripcion_corta: e.payload.doc.data()['descripcion_corta'],
          // tslint:disable-next-line: no-string-literal
          descripcion_larga: e.payload.doc.data()['descripcion_larga']
        };
      });
      console.log(this.toppingsD);
    });
  }

  // tslint:disable-next-line:typedef
  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}
