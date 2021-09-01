import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltaComponent } from './volta.component';

describe('VoltaComponent', () => {
  let component: VoltaComponent;
  let fixture: ComponentFixture<VoltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
