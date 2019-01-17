import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { CurtinhaService } from '../curtinha/curtinha.service';
import { Curtinha } from '../models/curtinha';

@Component({
  selector: 'app-detalhes-curtinha',
  templateUrl: './detalhes-curtinha.component.html',
  styleUrls: ['./detalhes-curtinha.component.css']
})
export class DetalhesCurtinhaComponent implements OnInit {

  curtinha: Curtinha;


  constructor(private route: ActivatedRoute,
              private curtinhaService: CurtinhaService,
              private routes: Router) {
  }

  ngOnInit() {
    let idCurtinha: number;
    this.route.params.subscribe(res => idCurtinha = res.id);
    this.curtinhaService.carregaUmaCurtinha(idCurtinha).map((curtinha: any) => {
      if (curtinha) {
          this.curtinha = new Curtinha(curtinha.Id, curtinha.Titulo, curtinha.Resumo, curtinha.Link);
      }
    }).subscribe();
  }

  deletarCurtinha() {
    this.curtinhaService.deletarCurtinha(this.curtinha).subscribe();
    this.routes.navigate([``]);
  }

  editarCurtinha(titulo: string, resumo: string, link: string) {
    this.curtinhaService.editarCurtinha(new Curtinha(this.curtinha.id, titulo, resumo, link)).subscribe();
    this.routes.navigate([``]);
  }
}
