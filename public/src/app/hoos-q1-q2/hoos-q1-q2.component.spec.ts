import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoosQ1Q2Component } from './hoos-q1-q2.component';

describe('HoosQ1Q2Component', () => {
  let component: HoosQ1Q2Component;
  let fixture: ComponentFixture<HoosQ1Q2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoosQ1Q2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoosQ1Q2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
