import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';


import { Curtinha } from '../curtinha/curtinha.model';
import { CurtinhaService } from '../curtinha/curtinha.service';

@Component({
  selector: 'app-lista-curtinhas',
  templateUrl: './lista-curtinhas.component.html',
  styleUrls: ['./lista-curtinhas.component.css']
})
export class ListaCurtinhasComponent implements OnInit {
  curtinhas = [];

  constructor(private curtinhaService: CurtinhaService) {
   }

   ngOnInit() {
    this.curtinhaService.carregaCurtinhas()
    .subscribe(success => {
      if (success) {
        this.curtinhas = this.curtinhaService.getCurtinhas();
      }
    });
    // this.curtinhaService.setCurtinhas(this.curtinhas);
    // this.curtinhaService.setCurtinhas([new Curtinha('A', 'B', 'C')]);
  }

  // ngOnInit() {
  //   this.curtinhaService.carregaCurtinhas().subscribe(bs =>
  //     this.curtinhas = bs.map(b => ({
  //       titulo: b.titulo,
  //       resumo: b.resumo,
  //       link: b.link
  //     }))
  //   );
  //   // this.curtinhaService.setCurtinhas(this.curtinhas);
  //   // this.curtinhaService.setCurtinhas([new Curtinha('A', 'B', 'C')]);
  // }

}
