import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment, AppointmentService } from '../Services/apointment-service.service';

@Component({
  selector: 'app-apointment-detail',
  templateUrl: './apointment-detail.component.html',
  styleUrls: ['./apointment-detail.component.scss']
})
export class ApointmentDetailComponent implements OnInit{
  appointment: Appointment | any;
  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.appointmentService.getAppointment(id!).subscribe((appointment: any) => {
      this.appointment = appointment;
    });
  }

}
