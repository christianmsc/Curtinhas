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

  constructor(private curtinhaService: CurtinhaService) {
   }

  ngOnInit() {
    if (!this.curtinhaService.carregou) {
      this.curtinhaService.carregaCurtinhas().map((user: Array<any>) => {
        if (user) {
          user.forEach((erg) => {
            this.curtinhaService.getCurtinhas().push(new Curtinha(erg.Titulo, erg.Resumo, erg.Link));
          });
        }
      })
      .subscribe();
    }
  }
}
