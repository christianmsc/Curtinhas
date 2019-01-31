import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginInvalido: boolean;

  constructor(private router: Router, private usuarioService: UsuarioService) {
  }

  fazerLogin(usuario: Usuario) {
    this.usuarioService.logarUsuario(usuario)
    .subscribe(
      (data: any) => {
        if (data) {
          const tokenDecifrado = jwt_decode(data);
          localStorage.setItem('token', data);
          localStorage.setItem('nome', tokenDecifrado.nome);
          localStorage.setItem('email', tokenDecifrado.email);
          this.router.navigate(['/']);
        } else {
          this.loginInvalido = true;
        }
      },
      error => this.loginInvalido = true
    );
   }

  usuarioEstaAutenticado() {
    return localStorage.getItem('token') !== null ? true : false;
  }
}
