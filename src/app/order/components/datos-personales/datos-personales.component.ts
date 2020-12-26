import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})
export class DatosPersonalesComponent implements OnInit {

  url$ = this.storage.storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/helarte-store.appspot.com/o/caja.jpg');
  imgCaja = this.url$.getDownloadURL();

  constructor(
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
  }

}
