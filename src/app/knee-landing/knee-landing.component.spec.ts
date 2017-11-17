import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneeLandingComponent } from './knee-landing.component';

describe('KneeLandingComponent', () => {
  let component: KneeLandingComponent;
  let fixture: ComponentFixture<KneeLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneeLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
