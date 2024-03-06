import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApointmentEditComponent } from './apointment-edit.component';

describe('ApointmentEditComponent', () => {
  let component: ApointmentEditComponent;
  let fixture: ComponentFixture<ApointmentEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApointmentEditComponent]
    });
    fixture = TestBed.createComponent(ApointmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
