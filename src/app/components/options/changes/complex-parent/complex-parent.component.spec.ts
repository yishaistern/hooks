import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexParentComponent } from './complex-parent.component';

describe('ComplexParentComponent', () => {
  let component: ComplexParentComponent;
  let fixture: ComponentFixture<ComplexParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
