import { Component, OnInit, Input, Output } from '@angular/core';
import { Curtinha } from '../models/curtinha';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curtinha',
  templateUrl: './curtinha.component.html',
  styleUrls: ['./curtinha.component.css']
})
export class CurtinhaComponent implements OnInit {
  @Input() curtinha: Curtinha;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  exibirDetalhes() {
    this.router.navigate([`/detalhes-curtinha/${this.curtinha.id}`]);
  }

}
