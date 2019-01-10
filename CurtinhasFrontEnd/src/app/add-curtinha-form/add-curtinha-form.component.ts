import { Component, OnInit } from '@angular/core';
import { Curtinha } from '../curtinha/curtinha.model';
import { CurtinhaService } from '../curtinha/curtinha.service';

@Component({
  selector: 'app-add-curtinha-form',
  templateUrl: './add-curtinha-form.component.html',
  styleUrls: ['./add-curtinha-form.component.css']
})
export class AddCurtinhaFormComponent implements OnInit {

  constructor(private curtinhaService: CurtinhaService) {
   }

  addCurtinha(titulo: HTMLInputElement, resumo: HTMLInputElement, link: HTMLInputElement): boolean {
    this.curtinhaService.addCurtinha(titulo.value, resumo.value, link.value);
    return false;
  }

  ngOnInit() {
  }

}
