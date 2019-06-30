import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentForComponent } from './parent-for.component';

describe('ParentForComponent', () => {
  let component: ParentForComponent;
  let fixture: ComponentFixture<ParentForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
