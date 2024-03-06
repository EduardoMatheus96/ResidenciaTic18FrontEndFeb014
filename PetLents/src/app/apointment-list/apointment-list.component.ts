import { Component, OnInit } from '@angular/core';
import { Appointment, AppointmentService } from '../Services/apointment-service.service';

@Component({
  selector: 'app-apointment-list',
  templateUrl: './apointment-list.component.html',
  styleUrls: ['./apointment-list.component.scss']
})
export class ApointmentListComponent implements OnInit{

  appointments?: Appointment[];

  constructor(private appointmentService: AppointmentService) {
    this.appointments;
  }

  ngOnInit(): void {
    this.appointmentService.getAllAppointments().subscribe((appointments: any) => {
      this.appointments = appointments;
    });
  }

}

