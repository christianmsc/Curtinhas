import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
      console.log(JSON.stringify(this.formulario.value));
    } else {
      Object.keys(this.formulario.controls).forEach(campo => {
        console.log(campo);
        const controle = this.formulario.get(campo);
        controle.markAsTouched();
      });
    }
  }

  verificaCaracteres(campoNome) {
    const campo = this.formulario.get(campoNome);
    if (campo.errors) {
      return !campo.errors[campoNome] && campo.touched;
    }
  }

  verificaCampoObrigatorio(campoNome) {
    const campo = this.formulario.get(campoNome);
    if (campo.errors) {
      return campo.errors.required && campo.touched;
    }
  }

  verificaEmailInvalido() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

}
