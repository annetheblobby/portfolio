import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompsaComponent } from './compsa.component';

describe('CompsaComponent', () => {
  let component: CompsaComponent;
  let fixture: ComponentFixture<CompsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
