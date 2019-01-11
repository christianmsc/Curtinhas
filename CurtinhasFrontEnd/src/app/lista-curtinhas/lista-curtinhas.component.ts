import { Component, OnInit } from '@angular/core';

import { Curtinha } from '../curtinha/curtinha.model';
import { CurtinhaService } from '../curtinha/curtinha.service';

@Component({
  selector: 'app-lista-curtinhas',
  templateUrl: './lista-curtinhas.component.html',
  styleUrls: ['./lista-curtinhas.component.css']
})
export class ListaCurtinhasComponent implements OnInit {
  curtinhas: Curtinha[];

  constructor(private curtinhaService: CurtinhaService) {
   }

   ngOnInit() {
    // this.curtinhaService.carregaCurtinhas().subscribe(cs =>
    //   this.curtinhas = cs.map(c => (
    //     {
    //       titulo: c.titulo,
    //       resumo: c.resumo,
    //       link: c.link
    //     }
    //   )));
    //   this.curtinhaService.setCurtinhas(this.curtinhas);
     this.curtinhaService.setCurtinhas([new Curtinha('A', 'B', 'C')]);
  }

}
