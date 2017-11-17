import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipMandatoryComponent } from './hip-mandatory.component';

describe('HipMandatoryComponent', () => {
  let component: HipMandatoryComponent;
  let fixture: ComponentFixture<HipMandatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipMandatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipMandatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
