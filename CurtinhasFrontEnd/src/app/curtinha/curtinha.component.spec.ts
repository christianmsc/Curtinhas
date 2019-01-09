import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtinhaComponent } from './curtinha.component';

describe('CurtinhaComponent', () => {
  let component: CurtinhaComponent;
  let fixture: ComponentFixture<CurtinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurtinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurtinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
