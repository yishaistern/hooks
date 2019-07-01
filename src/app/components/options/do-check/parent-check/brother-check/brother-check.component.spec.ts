import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotherCheckComponent } from './brother-check.component';

describe('BrotherCheckComponent', () => {
  let component: BrotherCheckComponent;
  let fixture: ComponentFixture<BrotherCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrotherCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrotherCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
