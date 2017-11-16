import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisPart1Component } from './promis-part1.component';

describe('PromisPart1Component', () => {
  let component: PromisPart1Component;
  let fixture: ComponentFixture<PromisPart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromisPart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
