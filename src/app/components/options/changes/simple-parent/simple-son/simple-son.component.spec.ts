import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSonComponent } from './simple-son.component';

describe('SimpleSonComponent', () => {
  let component: SimpleSonComponent;
  let fixture: ComponentFixture<SimpleSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
