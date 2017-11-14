import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipLandingComponent } from './hip-landing.component';

describe('HipLandingComponent', () => {
  let component: HipLandingComponent;
  let fixture: ComponentFixture<HipLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
