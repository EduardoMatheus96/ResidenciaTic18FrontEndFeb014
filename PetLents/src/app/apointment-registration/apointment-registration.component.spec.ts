import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApointmentRegistrationComponent } from './apointment-registration.component';

describe('ApointmentRegistrationComponent', () => {
  let component: ApointmentRegistrationComponent;
  let fixture: ComponentFixture<ApointmentRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApointmentRegistrationComponent]
    });
    fixture = TestBed.createComponent(ApointmentRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
