import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneePage2Component } from './knee-page2.component';

describe('KneePage2Component', () => {
  let component: KneePage2Component;
  let fixture: ComponentFixture<KneePage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneePage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
