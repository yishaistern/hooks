import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCheckComponent } from './parent-check.component';

describe('ParentCheckComponent', () => {
  let component: ParentCheckComponent;
  let fixture: ComponentFixture<ParentCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
