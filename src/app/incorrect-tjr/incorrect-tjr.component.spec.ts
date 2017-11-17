import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectTjrComponent } from './incorrect-tjr.component';

describe('IncorrectTjrComponent', () => {
  let component: IncorrectTjrComponent;
  let fixture: ComponentFixture<IncorrectTjrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncorrectTjrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorrectTjrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
