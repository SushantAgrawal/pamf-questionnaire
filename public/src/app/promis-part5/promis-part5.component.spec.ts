import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisPart5Component } from './promis-part5.component';

describe('PromisPart5Component', () => {
  let component: PromisPart5Component;
  let fixture: ComponentFixture<PromisPart5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromisPart5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisPart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
