import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisPart2Component } from './promis-part2.component';

describe('PromisPart2Component', () => {
  let component: PromisPart2Component;
  let fixture: ComponentFixture<PromisPart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromisPart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
