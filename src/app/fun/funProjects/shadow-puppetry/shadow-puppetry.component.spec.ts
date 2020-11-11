import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowPuppetryComponent } from './shadow-puppetry.component';

describe('ShadowPuppetryComponent', () => {
  let component: ShadowPuppetryComponent;
  let fixture: ComponentFixture<ShadowPuppetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowPuppetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowPuppetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
