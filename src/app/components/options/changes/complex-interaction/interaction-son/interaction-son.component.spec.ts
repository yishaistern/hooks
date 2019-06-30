import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionSonComponent } from './interaction-son.component';

describe('InteractionSonComponent', () => {
  let component: InteractionSonComponent;
  let fixture: ComponentFixture<InteractionSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
