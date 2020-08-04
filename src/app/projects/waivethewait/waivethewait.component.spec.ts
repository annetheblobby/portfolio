import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaivethewaitComponent } from './waivethewait.component';

describe('WaivethewaitComponent', () => {
  let component: WaivethewaitComponent;
  let fixture: ComponentFixture<WaivethewaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaivethewaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaivethewaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
