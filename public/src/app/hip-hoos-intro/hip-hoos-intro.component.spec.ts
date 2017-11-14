import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipHoosIntroComponent } from './hip-hoos-intro.component';

describe('HipHoosIntroComponent', () => {
  let component: HipHoosIntroComponent;
  let fixture: ComponentFixture<HipHoosIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipHoosIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipHoosIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
