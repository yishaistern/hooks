import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleParentComponent } from './simple-parent.component';

describe('SimpleParentComponent', () => {
  let component: SimpleParentComponent;
  let fixture: ComponentFixture<SimpleParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
