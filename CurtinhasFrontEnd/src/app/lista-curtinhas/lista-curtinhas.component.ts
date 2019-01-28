import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import { CurtinhaService } from '../curtinha/curtinha.service';
import { Curtinha } from '../models/curtinha';

@Component({
  selector: 'app-lista-curtinhas',
  templateUrl: './lista-curtinhas.component.html',
  styleUrls: ['./lista-curtinhas.component.css']
})
export class ListaCurtinhasComponent implements OnInit {

  carregando: boolean;
  filteredItems: Curtinha[];

  constructor(private curtinhaService: CurtinhaService) {
   }

  ngOnInit() {
    if (!this.curtinhaService.carregou) {
      this.carregando = true;
      this.curtinhaService.carregaCurtinhas().map((curtinhas: Array<any>) => {
        if (curtinhas) {
          curtinhas.forEach((curtinha) => {
            this.curtinhaService
            .getCurtinhas()
            .push(
              new Curtinha( curtinha.Id,
                            curtinha.UrlImagem,
                            curtinha.Titulo,
                            curtinha.Resumo,
                            undefined,
                            curtinha.DataPublicacao,
                            undefined,
                            curtinha.Link));
          });
        }
      })
      .subscribe(success => {
        this.carregando = false;
        this.curtinhaService.carregou = true;
        this.assignCopy();
      });
    } else {
      this.assignCopy();
    }
  }

  assignCopy() {
    this.filteredItems = Object.assign([], this.curtinhaService.getCurtinhas());
  }

  filterItem(value) {
    if (!value) {
        this.assignCopy();
    } // when nothing has typed
    this.filteredItems = Object.assign([],
      this.curtinhaService.getCurtinhas())
        .filter(item => item.titulo.toLowerCase().indexOf(value.toLowerCase()) > -1);
  }

  filtrarResumos(value) {
    if (!value) {
      this.assignCopy();
  } // when nothing has typed
  this.filteredItems = Object.assign([],
    this.curtinhaService.getCurtinhas())
      .filter(item => item.resumo.toLowerCase().indexOf(value.toLowerCase()) > -1);
  }
}
