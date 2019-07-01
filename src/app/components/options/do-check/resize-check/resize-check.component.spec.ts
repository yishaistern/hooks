import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeCheckComponent } from './resize-check.component';

describe('ResizeCheckComponent', () => {
  let component: ResizeCheckComponent;
  let fixture: ComponentFixture<ResizeCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizeCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
