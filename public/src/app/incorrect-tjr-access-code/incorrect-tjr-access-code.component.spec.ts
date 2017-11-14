import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectTjrAccessCodeComponent } from './incorrect-tjr-access-code.component';

describe('IncorrectTjrAccessCodeComponent', () => {
  let component: IncorrectTjrAccessCodeComponent;
  let fixture: ComponentFixture<IncorrectTjrAccessCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncorrectTjrAccessCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorrectTjrAccessCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
