import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualBranchSupportComponent } from './virtual-branch-support.component';

describe('VirtualBranchSupportComponent', () => {
  let component: VirtualBranchSupportComponent;
  let fixture: ComponentFixture<VirtualBranchSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualBranchSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualBranchSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
