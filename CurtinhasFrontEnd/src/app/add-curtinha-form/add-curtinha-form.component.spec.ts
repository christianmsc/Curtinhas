import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCurtinhaFormComponent } from './add-curtinha-form.component';

describe('AddCurtinhaFormComponent', () => {
  let component: AddCurtinhaFormComponent;
  let fixture: ComponentFixture<AddCurtinhaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCurtinhaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCurtinhaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
