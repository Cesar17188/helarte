import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { TOPPING } from '@core/models/topping.model';
import { ToppingSalService } from '@core/services/topping-sal/topping-sal.service';

@Component({
  selector: 'app-toppings-sal',
  templateUrl: './toppings-sal.container.html',
  styleUrls: ['./toppings-sal.container.scss']
})
// tslint:disable-next-line:component-class-suffix
export class ToppingsSalContainer implements OnInit {

  toppingsS: TOPPING[];
  data: any;
  img: any;

  constructor(
    private toppingService: ToppingSalService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.fetchToppings();
  }

  // tslint:disable-next-line:typedef
  fetchToppings() {
    this.toppingService.getAllToppingsS().subscribe(data => {
      this.toppingsS = data.map( e => {
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
      console.log(this.toppingsS);
    });
  }

  // tslint:disable-next-line:typedef
  clickProduct(codigo: string) {
    console.log('producto');
    console.log(codigo);
  }

}
