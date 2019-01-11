import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCurtinhasComponent } from './lista-curtinhas.component';

describe('ListaCurtinhasComponent', () => {
  let component: ListaCurtinhasComponent;
  let fixture: ComponentFixture<ListaCurtinhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCurtinhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCurtinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
