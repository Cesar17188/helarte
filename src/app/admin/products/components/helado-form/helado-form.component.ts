import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Location } from '@angular/common';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

import { HELADO } from '@core/models/helado.model';



@Component({
  selector: 'app-helado-form',
  templateUrl: './helado-form.component.html',
  styleUrls: ['./helado-form.component.scss']
})
export class HeladoFormComponent implements OnInit {

  form: FormGroup;
  image$: Observable<string>;
  isNew = true;

  @Input()
  set helado(data: HELADO) {
    if (data) {
      this.isNew = false;
      this.form.patchValue(data);
    }
  }
  @Output() create = new EventEmitter();
  @Output() update = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage,
    private location: Location,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  private buildForm() {
    this.form = this.formBuilder.group({
      producto: ['', [Validators.required, Validators.minLength(5)]],
      descripcion_corta: ['', [Validators.required, Validators.minLength(10)]],
      descripcion_larga: ['', [Validators.required, Validators.minLength(25)]],
      precioVenta: [0, [Validators.required, Validators.min(1.00)]],
      img: ['', Validators.required],
    });
  }

  // tslint:disable-next-line:typedef
  get productField() {
    return this.form.get('producto');
  }

  // tslint:disable-next-line:typedef
  get descripcion_cortaField() {
    return this.form.get('descripcion_corta');
  }

  // tslint:disable-next-line:typedef
  get descripcion_largaField() {
    return this.form.get('descripcion_corta');
  }

  // tslint:disable-next-line:typedef
  get precioVentaField() {
    return this.form.get('precioVenta');
  }

  // tslint:disable-next-line:typedef
  get imageField() {
    return this.form.get('img');
  }

  // tslint:disable-next-line:typedef
  save() {
    if (this.form.valid) {
      if (this.isNew) {
        this.create.emit(this.form.value);
      } else {
        this.update.emit(this.form.value);
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  // tslint:disable-next-line:typedef
  uploadFile(event) {
    event.preventDefault();
    const img = event.target.files[0];
    const name = `${uuidv4()}.png`;
    const ref = this.storage.ref(name);
    const task = this.storage.upload(name, img);

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        const urlImage$ = ref.getDownloadURL();
        urlImage$.subscribe(url => {
          console.log(url);
          this.imageField.setValue(url);
        });
      })
    )
    .subscribe();
  }

  // tslint:disable-next-line:typedef
  backClicked() {
    this.location.back();
  }

}
