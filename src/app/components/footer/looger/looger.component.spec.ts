import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoogerComponent } from './looger.component';

describe('LoogerComponent', () => {
  let component: LoogerComponent;
  let fixture: ComponentFixture<LoogerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoogerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoogerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
