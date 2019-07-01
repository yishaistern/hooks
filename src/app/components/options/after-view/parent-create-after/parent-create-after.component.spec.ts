import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCreateAfterComponent } from './parent-create-after.component';

describe('ParentCreateAfterComponent', () => {
  let component: ParentCreateAfterComponent;
  let fixture: ComponentFixture<ParentCreateAfterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCreateAfterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCreateAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
