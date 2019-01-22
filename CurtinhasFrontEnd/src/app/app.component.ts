import { Component, OnInit } from '@angular/core';
import { CurtinhaService } from './curtinha/curtinha.service';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mostrarMenu = false;

  constructor(private curtinhaService: CurtinhaService, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

}
