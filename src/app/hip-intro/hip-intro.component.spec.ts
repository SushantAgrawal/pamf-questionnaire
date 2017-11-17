import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipIntroComponent } from './hip-intro.component';

describe('HipIntroComponent', () => {
  let component: HipIntroComponent;
  let fixture: ComponentFixture<HipIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
