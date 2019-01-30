import { Component } from '@angular/core';

import { CurtinhaService } from '../curtinha/curtinha.service';
import { Router } from '@angular/router';
import { Curtinha } from '../models/curtinha';

@Component({
  selector: 'app-add-curtinha-form',
  templateUrl: './add-curtinha-form.component.html',
  styleUrls: ['./add-curtinha-form.component.css']
})
export class AddCurtinhaFormComponent {
  errosServidor: string[] = [];
  constructor(private curtinhaService: CurtinhaService, private router: Router) {
   }

  voltarInicio() {
    this.router.navigate(['']);
  }

  addCurtinha(
              urlImagem: HTMLInputElement,
              titulo: HTMLInputElement,
              resumo: HTMLInputElement,
              link: HTMLInputElement,
              detalhes: HTMLInputElement
            ) {
    this.curtinhaService.addCurtinha(
      new Curtinha(
        undefined,
        urlImagem.value,
        titulo.value,
        resumo.value,
        detalhes.value,
        undefined,
        undefined,
        link.value)
    ).subscribe(
      success => {
        this.voltarInicio();
      },
      (err) => {
        this.curtinhaService.naoCadastrou = true;
        this.errosServidor = [];
        if (err.status === 400) {
          if (err.error.ModelState['curtinha.UrlImagem']) {
            err.error.ModelState['curtinha.UrlImagem'].forEach(erro => {
              if (erro) {
                this.errosServidor.push(erro);
              }
            });
          }
          if (err.error.ModelState['curtinha.Titulo']) {
            err.error.ModelState['curtinha.Titulo'].forEach(erro => {
              if (erro) {
                this.errosServidor.push(erro);
              }
            });
          }
          if (err.error.ModelState['curtinha.Resumo']) {
            err.error.ModelState['curtinha.Resumo'].forEach(erro => {
              if (erro) {
                this.errosServidor.push(erro);
              }
            });
          }
          if (err.error.ModelState['curtinha.Link']) {
            err.error.ModelState['curtinha.Link'].forEach(erro => {
              if (erro) {
                this.errosServidor.push(erro);
              }
            });
          }
        }
      }
    );
  }
}
