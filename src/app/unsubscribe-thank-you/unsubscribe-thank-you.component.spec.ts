import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeThankYouComponent } from './unsubscribe-thank-you.component';

describe('UnsubscribeThankYouComponent', () => {
  let component: UnsubscribeThankYouComponent;
  let fixture: ComponentFixture<UnsubscribeThankYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubscribeThankYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribeThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
