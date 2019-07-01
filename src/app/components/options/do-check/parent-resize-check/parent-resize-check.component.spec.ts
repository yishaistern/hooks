import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentResizeCheckComponent } from './parent-resize-check.component';

describe('ParentResizeCheckComponent', () => {
  let component: ParentResizeCheckComponent;
  let fixture: ComponentFixture<ParentResizeCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentResizeCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentResizeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
