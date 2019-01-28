import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { CurtinhaService } from '../curtinha/curtinha.service';
import { Curtinha } from '../models/curtinha';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-detalhes-curtinha',
  templateUrl: './detalhes-curtinha.component.html',
  styleUrls: ['./detalhes-curtinha.component.css']
})
export class DetalhesCurtinhaComponent implements OnInit {

  curtinha: Curtinha;
  carregando: boolean;
  carregou: boolean;


  constructor(private route: ActivatedRoute,
              private curtinhaService: CurtinhaService,
              private authService: AuthService,
              private routes: Router) {
  }

  ngOnInit() {
    if (!this.carregou) {
      let idCurtinha: number;
      this.route.params.subscribe(res => idCurtinha = res.id);
      this.curtinhaService.carregaUmaCurtinha(idCurtinha).map((curtinha: any) => {
        if (curtinha) {
            this.curtinha = new Curtinha( curtinha.Id,
                                          curtinha.UrlImagem,
                                          curtinha.Titulo,
                                          curtinha.Resumo,
                                          curtinha.Detalhes,
                                          curtinha.DataPublicacao,
                                          curtinha.DataEdicao,
                                          curtinha.Link);
        }
      }).subscribe( success => {
        this.carregando = false;
        this.carregou = true;
      });
    }
  }

  deletarCurtinha() {
    this.curtinhaService.deletarCurtinha(this.curtinha).subscribe(success => {
      this.routes.navigate([``]);
    });
  }

  editarCurtinha(urlImagem: string, titulo: string, resumo: string, detalhes: string, link: string) {
    this.carregando = true;
    this.carregou = false;
    this.curtinhaService.editarCurtinha(new Curtinha( this.curtinha.id,
                                                      urlImagem,
                                                      titulo,
                                                      resumo,
                                                      detalhes,
                                                      this.curtinha.dataPublicacao,
                                                      undefined,
                                                      link)).subscribe(success => {
                                                        this.carregando = false;
                                                        this.ngOnInit();
    });
  }
}
