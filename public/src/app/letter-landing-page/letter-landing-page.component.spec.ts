import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterLandingPageComponent } from './letter-landing-page.component';

describe('LetterLandingPageComponent', () => {
  let component: LetterLandingPageComponent;
  let fixture: ComponentFixture<LetterLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
