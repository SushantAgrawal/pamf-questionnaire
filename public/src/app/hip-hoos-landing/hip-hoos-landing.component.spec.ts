import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipHoosLandingComponent } from './hip-hoos-landing.component';

describe('HipHoosLandingComponent', () => {
  let component: HipHoosLandingComponent;
  let fixture: ComponentFixture<HipHoosLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipHoosLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipHoosLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
