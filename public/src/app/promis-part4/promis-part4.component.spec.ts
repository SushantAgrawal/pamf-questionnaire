import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisPart4Component } from './promis-part4.component';

describe('PromisPart4Component', () => {
  let component: PromisPart4Component;
  let fixture: ComponentFixture<PromisPart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromisPart4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisPart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
