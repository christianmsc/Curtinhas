import { Component, OnInit, Input } from '@angular/core';
import { Curtinha } from './curtinha.model';

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
