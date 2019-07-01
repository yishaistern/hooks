import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonCheckComponent } from './son-check.component';

describe('SonCheckComponent', () => {
  let component: SonCheckComponent;
  let fixture: ComponentFixture<SonCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
