import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogetherapartComponent } from './togetherapart.component';

describe('TogetherapartComponent', () => {
  let component: TogetherapartComponent;
  let fixture: ComponentFixture<TogetherapartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogetherapartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogetherapartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
