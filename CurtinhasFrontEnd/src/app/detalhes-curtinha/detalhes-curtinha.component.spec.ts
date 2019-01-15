import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCurtinhaComponent } from './detalhes-curtinha.component';

describe('DetalhesCurtinhaComponent', () => {
  let component: DetalhesCurtinhaComponent;
  let fixture: ComponentFixture<DetalhesCurtinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesCurtinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesCurtinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
