import { Component, Input, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SYRUP } from '@core/models/syrup.model';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crema-form',
  templateUrl: './crema-form.component.html',
  styleUrls: ['./crema-form.component.scss']
})
export class CremaFormComponent implements OnInit {

  form: FormGroup;
  isNew = true;
  image$: Observable<string>;


  @Input()
  set crema(data: SYRUP) {
    if (data) {
      this.isNew = false;
      this.form.patchValue(data);
    }
  }
  @Output() createCrema = new EventEmitter();
  @Output() updateCrema = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage,
    private location: Location
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  private buildForm() {
    this.form = this.formBuilder.group({
      codigo: ['', [Validators.required]],
      producto: ['', [Validators.required, Validators.minLength(5)]],
      descripcion_corta: ['', [Validators.required, Validators.minLength(10)]],
      descripcion_larga: ['', [Validators.required, Validators.minLength(25)]],
      unidadMedida: ['', [Validators.required, Validators.minLength(5)]],
      image: ['', Validators.required],
    });
  }

  // tslint:disable-next-line:typedef
  get codigoField() {
    return this.form.get('codigo');
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
  get unidadMedidaField() {
    return this.form.get('unidadMedida');
  }

  // tslint:disable-next-line:typedef
  get imageField() {
    return this.form.get('image');
  }

  // tslint:disable-next-line:typedef
  save() {
    if (this.form.valid) {
      if (this.isNew) {
        this.createCrema.emit(this.form.value);
      } else {
        this.updateCrema.emit(this.form.value);
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
        this.image$ = ref.getDownloadURL();
        this.image$.subscribe(url => {
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
