import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipPage1Component } from './hip-page1.component';

describe('HipPage1Component', () => {
  let component: HipPage1Component;
  let fixture: ComponentFixture<HipPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
