import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckrComponent } from './checkr.component';

describe('CheckrComponent', () => {
  let component: CheckrComponent;
  let fixture: ComponentFixture<CheckrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
