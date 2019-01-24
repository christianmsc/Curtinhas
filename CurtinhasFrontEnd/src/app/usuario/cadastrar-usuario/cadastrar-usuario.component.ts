import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  formulario: FormGroup;
  usuario: Usuario = new Usuario();

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private routes: Router) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      login: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      senha: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.usuario.id = undefined;
      this.usuario.nome = this.formulario.get('nome').value;
      this.usuario.email = this.formulario.get('email').value;
      this.usuario.login = this.formulario.get('login').value;
      this.usuario.senha = this.formulario.get('senha').value;
      this.usuarioService.addUsuario(this.usuario).subscribe(cadastrou => {
        this.usuarioService.cadastrou = true;
        this.routes.navigate(['/login']);
      },
        error => this.usuarioService.naoCadastrou = true);
    } else {
      Object.keys(this.formulario.controls).forEach(campo => {
        const controle = this.formulario.get(campo);
        controle.markAsTouched();
      });
    }
  }

  validarNome() {
    if (this.formulario.get('nome').touched) {
      if (this.formulario.get('nome').errors) {
        const campo = this.formulario.get('nome');
        const mensagensErros: string[] = [];
          if (campo.errors.required) {
            mensagensErros.push('Nome é obrigatório!');
          } if (!campo.errors['nome']) {
            mensagensErros.push('Nome deve ter entre 3 e 20 caracteres!');
          }
        return mensagensErros;
      }
    }
  }

  validarEmail() {
    if (this.formulario.get('email').touched) {
      if (this.formulario.get('email').errors) {
        const campo = this.formulario.get('email');
        const mensagensErros: string[] = [];
          if (campo.errors.required) {
            mensagensErros.push('E-mail é obrigatório!');
          } if (campo.errors['email']) {
            mensagensErros.push('E-mail inválido!');
          }
        return mensagensErros;
      }
    }
  }

  validarLogin() {
    if (this.formulario.get('login').touched) {
      if (this.formulario.get('login').errors) {
        const campo = this.formulario.get('login');
        const mensagensErros: string[] = [];
          if (campo.errors.required) {
            mensagensErros.push('Login é obrigatório!');
          } if (!campo.errors['login']) {
            mensagensErros.push('Login deve ter entre 3 e 10 caracteres!');
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
            mensagensErros.push('Senha é obrigatório!');
          } if (!campo.errors['senha']) {
            mensagensErros.push('Senha deve ter entre 6 e 20 caracteres!');
          }
        return mensagensErros;
      }
    }
  }

}
