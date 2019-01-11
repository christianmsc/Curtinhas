import { Component } from '@angular/core';

import { CurtinhaService } from '../curtinha/curtinha.service';

@Component({
  selector: 'app-add-curtinha-form',
  templateUrl: './add-curtinha-form.component.html',
  styleUrls: ['./add-curtinha-form.component.css']
})
export class AddCurtinhaFormComponent {
  constructor(private curtinhaService: CurtinhaService) {
   }

  addCurtinha(titulo: HTMLInputElement, resumo: HTMLInputElement, link: HTMLInputElement): boolean {
    this.curtinhaService.addCurtinha(titulo.value, resumo.value, link.value);
    return false;
  }
}
