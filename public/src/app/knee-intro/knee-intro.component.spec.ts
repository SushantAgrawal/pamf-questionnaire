import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneeIntroComponent } from './knee-intro.component';

describe('KneeIntroComponent', () => {
  let component: KneeIntroComponent;
  let fixture: ComponentFixture<KneeIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneeIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneeIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
