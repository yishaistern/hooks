import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexInteractionComponent } from './complex-interaction.component';

describe('ComplexInteractionComponent', () => {
  let component: ComplexInteractionComponent;
  let fixture: ComponentFixture<ComplexInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
