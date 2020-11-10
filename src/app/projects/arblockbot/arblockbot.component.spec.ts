import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArblockbotComponent } from './arblockbot.component';

describe('ArblockbotComponent', () => {
  let component: ArblockbotComponent;
  let fixture: ComponentFixture<ArblockbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArblockbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArblockbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
