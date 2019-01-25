import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimasCurtinhasComponent } from './ultimas-curtinhas.component';

describe('UltimasCurtinhasComponent', () => {
  let component: UltimasCurtinhasComponent;
  let fixture: ComponentFixture<UltimasCurtinhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimasCurtinhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimasCurtinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
