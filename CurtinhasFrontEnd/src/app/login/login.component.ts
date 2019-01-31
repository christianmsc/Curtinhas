import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  formulario: FormGroup;

  constructor(
              private authService: AuthService,
              private route: Router,
              private formBuilder: FormBuilder,
              private usuarioService: UsuarioService
            ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      login: [null, [Validators.required]],
      senha: [null, [Validators.required]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.usuario.login = this.formulario.get('login').value;
      this.usuario.senha = this.formulario.get('senha').value;
      this.authService.fazerLogin(this.usuario);
    } else {
      Object.keys(this.formulario.controls).forEach(campo => {
        console.log(campo);
        const controle = this.formulario.get(campo);
        controle.markAsTouched();
      });
    }
  }

  cadastrarUsuario() {
    this.route.navigate(['/cadastrar-usuario']);
  }

  validarLogin() {
    if (this.formulario.get('login').touched) {
      if (this.formulario.get('login').errors) {
        const campo = this.formulario.get('login');
        const mensagensErros: string[] = [];
        if (campo.errors.required) {
          mensagensErros.push('Login é obrigatório!');
        }
        return mensagensErros;
      }
    }
  }

  validarSenha() {
    if (this.formulario.get('senha').touched) {
      if (this.formulario.get('senha').errors) {
        const campo = this.formulario.get('senha');
        const mensagensErros: string[] = [];
        if (campo.errors.required) {
          mensagensErros.push('Senha é obrigatória!');
        }
        return mensagensErros;
      }
    }
  }

  deslogar() {
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
    localStorage.removeItem('email');
  }

}
