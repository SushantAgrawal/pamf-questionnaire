import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouKneeComponent } from './thank-you-knee.component';

describe('ThankYouKneeComponent', () => {
  let component: ThankYouKneeComponent;
  let fixture: ComponentFixture<ThankYouKneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankYouKneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouKneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
