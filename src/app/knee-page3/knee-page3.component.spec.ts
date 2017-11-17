import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneePage3Component } from './knee-page3.component';

describe('KneePage3Component', () => {
  let component: KneePage3Component;
  let fixture: ComponentFixture<KneePage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneePage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneePage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
