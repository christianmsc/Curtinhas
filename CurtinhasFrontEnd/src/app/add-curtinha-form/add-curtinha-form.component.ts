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
  constructor(private curtinhaService: CurtinhaService, private router: Router) {
   }

  voltarInicio() {
    this.router.navigate(['']);
  }

  addCurtinha(titulo: HTMLInputElement, resumo: HTMLInputElement, link: HTMLInputElement) {
    this.curtinhaService.addCurtinha(new Curtinha(titulo.value, resumo.value, link.value)).subscribe();
    this.voltarInicio();
  }
}
