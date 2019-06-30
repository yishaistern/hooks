import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleChangesComponent } from './simple-changes.component';

describe('SimpleChangesComponent', () => {
  let component: SimpleChangesComponent;
  let fixture: ComponentFixture<SimpleChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
