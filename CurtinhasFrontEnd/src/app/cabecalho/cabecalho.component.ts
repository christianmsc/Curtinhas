import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor(private authService: AuthService, private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

}
