import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { UsersService } from '@core/services/users/users.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios = [];
  img: any;
  data: any;
  displayedColumns: string[] = ['uid', 'usuario', 'role', 'actions'];

  constructor(
    private usuariosService: UsersService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
  }

}
