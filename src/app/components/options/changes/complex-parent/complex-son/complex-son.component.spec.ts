import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexSonComponent } from './complex-son.component';

describe('ComplexSonComponent', () => {
  let component: ComplexSonComponent;
  let fixture: ComponentFixture<ComplexSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
