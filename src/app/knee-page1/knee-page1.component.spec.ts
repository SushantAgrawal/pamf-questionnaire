import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneePage1Component } from './knee-page1.component';

describe('KneePage1Component', () => {
  let component: KneePage1Component;
  let fixture: ComponentFixture<KneePage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneePage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
