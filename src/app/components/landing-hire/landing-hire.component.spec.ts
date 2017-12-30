import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHireComponent } from './landing-hire.component';

describe('LandingHireComponent', () => {
  let component: LandingHireComponent;
  let fixture: ComponentFixture<LandingHireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingHireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
