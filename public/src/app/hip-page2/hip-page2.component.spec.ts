import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipPage2Component } from './hip-page2.component';

describe('HipPage2Component', () => {
  let component: HipPage2Component;
  let fixture: ComponentFixture<HipPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
