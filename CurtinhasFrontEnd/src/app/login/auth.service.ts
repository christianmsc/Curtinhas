import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;
  usuario: Usuario = new Usuario();
  loginInvalido: boolean;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  fazerLogin(usuario: Usuario) {
    this.loginInvalido = false;
    this.usuarioService.logarUsuario(usuario)
    .subscribe(
      (data: any) => {
        if (data) {
          this.usuario.id = data.Id;
          this.usuario.nome = data.Nome;
          this.usuario.email = data.Email;
          this.usuario.login = data.Login;
          this.usuario.senha = data.Senha;
          this.usuarioAutenticado = true;
          this.mostrarMenuEmitter.emit(true);
          this.router.navigate(['/']);
        } else {
          this.loginInvalido = true;
        }
      },
      error => {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
      }
    );
   }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
