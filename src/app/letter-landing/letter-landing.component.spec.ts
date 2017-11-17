import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterLandingComponent } from './letter-landing.component';

describe('LetterLandingComponent', () => {
  let component: LetterLandingComponent;
  let fixture: ComponentFixture<LetterLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
