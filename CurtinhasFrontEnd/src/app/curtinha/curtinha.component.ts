import { Component, OnInit, Input, Output } from '@angular/core';
import { Curtinha } from '../models/curtinha';

@Component({
  selector: 'app-curtinha',
  templateUrl: './curtinha.component.html',
  styleUrls: ['./curtinha.component.css']
})
export class CurtinhaComponent implements OnInit {
  @Input() curtinha: Curtinha;

  ngOnInit() {
  }

}
