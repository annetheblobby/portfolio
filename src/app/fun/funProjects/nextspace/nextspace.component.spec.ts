import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextspaceComponent } from './nextspace.component';

describe('NextspaceComponent', () => {
  let component: NextspaceComponent;
  let fixture: ComponentFixture<NextspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
