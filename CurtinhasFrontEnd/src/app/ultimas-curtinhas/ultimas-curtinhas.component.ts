import { Component, OnInit } from '@angular/core';
import { CurtinhaService } from '../curtinha/curtinha.service';
import { Curtinha } from '../models/curtinha';

@Component({
  selector: 'app-ultimas-curtinhas',
  templateUrl: './ultimas-curtinhas.component.html',
  styleUrls: ['./ultimas-curtinhas.component.css']
})
export class UltimasCurtinhasComponent implements OnInit {

  carregando: boolean;

  constructor(private curtinhaService: CurtinhaService) { }

  ngOnInit() {
    if (!this.curtinhaService.carregouUltimas) {
      this.carregando = true;
      this.curtinhaService.carregaUltimasCurtinhas().map((curtinhas: Array<any>) => {
        if (curtinhas) {
          curtinhas.forEach((curtinha) => {
            this.curtinhaService
            .ultimasCurtinhas
            .push(
              new Curtinha(curtinha.Id, curtinha.Titulo, curtinha.Resumo, curtinha.Link));
          });
        }
      })
      .subscribe(success => {
        this.carregando = false;
        this.curtinhaService.carregouUltimas = true;
      });
    }
  }

}
