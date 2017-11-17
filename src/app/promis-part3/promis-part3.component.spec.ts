import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisPart3Component } from './promis-part3.component';

describe('PromisPart3Component', () => {
  let component: PromisPart3Component;
  let fixture: ComponentFixture<PromisPart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromisPart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisPart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
