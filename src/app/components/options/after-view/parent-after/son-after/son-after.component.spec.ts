import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonAfterComponent } from './son-after.component';

describe('SonAfterComponent', () => {
  let component: SonAfterComponent;
  let fixture: ComponentFixture<SonAfterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonAfterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
