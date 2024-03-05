import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';

export interface Appointment {
  nome: string;
  data: string;
  detalhes: string;
}
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private db: AngularFireDatabase) { }

  createAppointment(appointment: Appointment) {
    return this.db.list('/appointments').push(appointment);
  }

  getAllAppointments() {
    return this.db.list('/appointments').valueChanges();
  }

  getAppointment(id: string) {
    return this.db.object('/appointments/' + id).valueChanges();
  }

  updateAppointment(id: string, appointment: Appointment) {
    return this.db.object('/appointments/' + id).update(appointment);
  }

  deleteAppointment(id: string) {
    return this.db.object('/appointments/' + id).remove();
  }
}
