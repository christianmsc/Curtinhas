import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-validacao-erro',
  templateUrl: './validacao-erro.component.html',
  styleUrls: ['./validacao-erro.component.css']
})
export class ValidacaoErroComponent implements OnInit {

  @Input() mostrarErro: boolean;
  @Input() msgErro: string;

  constructor() { }

  ngOnInit() {
  }

}
