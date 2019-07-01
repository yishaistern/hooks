import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAfterComponent } from './parent-after.component';

describe('ParentAfterComponent', () => {
  let component: ParentAfterComponent;
  let fixture: ComponentFixture<ParentAfterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentAfterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
