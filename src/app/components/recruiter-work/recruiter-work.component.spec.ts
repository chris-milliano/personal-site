import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterWorkComponent } from './recruiter-work.component';

describe('RecruiterWorkComponent', () => {
  let component: RecruiterWorkComponent;
  let fixture: ComponentFixture<RecruiterWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
