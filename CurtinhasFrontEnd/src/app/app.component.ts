import { Component } from '@angular/core';
import { Curtinha } from './curtinha/curtinha.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  curtinhas: Curtinha[] = [];

  addCurtinha(titulo: HTMLInputElement, resumo: HTMLInputElement, link: HTMLInputElement): boolean {
    this.curtinhas.push(new Curtinha(titulo.value, resumo.value, link.value));
    return false;
  }
}
