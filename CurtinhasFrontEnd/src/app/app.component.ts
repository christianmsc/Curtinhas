import { Component } from '@angular/core';
import { Curtinha } from './curtinha/curtinha.model';
import { CurtinhaService } from './curtinha/curtinha.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private curtinhaService: CurtinhaService) {
  }

}
