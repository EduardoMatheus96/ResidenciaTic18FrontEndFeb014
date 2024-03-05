import { Component } from '@angular/core';
import { Appointment, AppointmentService } from '../Services/apointment-service.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apointment-registration',
  templateUrl: './apointment-registration.component.html',
  styleUrls: ['./apointment-registration.component.scss'],
})
export class ApointmentRegistrationComponent {

  appointment: Appointment = {
    nome: '',
    data: '',
    detalhes: ''
  };
  constructor(private appointmentService: AppointmentService) { }

  registerAppointment() {
    console.log(this.appointment);
    this.appointmentService.createAppointment(this.appointment);
  }
}
