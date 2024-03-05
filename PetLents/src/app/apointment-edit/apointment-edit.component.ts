import { Component, OnInit } from '@angular/core';
import { Appointment, AppointmentService } from '../Services/apointment-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apointment-edit',
  templateUrl: './apointment-edit.component.html',
  styleUrls: ['./apointment-edit.component.scss']
})
export class ApointmentEditComponent implements OnInit {
  appointment: Appointment | any;

  constructor(private route: ActivatedRoute,
    private appointmentService: AppointmentService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.appointmentService.getAppointment(id!).subscribe((appointment: any) => {
      this.appointment = appointment;
    });
  }

  saveAppointment() {
    const id = this.route.snapshot.paramMap.get('id');
    this.appointmentService.updateAppointment(id!, this.appointment!);
  }

}
