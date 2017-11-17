import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouHipComponent } from './thank-you-hip.component';

describe('ThankYouHipComponent', () => {
  let component: ThankYouHipComponent;
  let fixture: ComponentFixture<ThankYouHipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankYouHipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouHipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
