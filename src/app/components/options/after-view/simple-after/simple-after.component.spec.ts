import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAfterComponent } from './simple-after.component';

describe('SimpleAfterComponent', () => {
  let component: SimpleAfterComponent;
  let fixture: ComponentFixture<SimpleAfterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAfterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
