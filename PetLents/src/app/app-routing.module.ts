import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApointmentRegistrationComponent } from './apointment-registration/apointment-registration.component';
import { ApointmentListComponent } from './apointment-list/apointment-list.component';
import { ApointmentEditComponent } from './apointment-edit/apointment-edit.component';
import { ApointmentDetailComponent } from './apointment-detail/apointment-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', canActivate: [AuthGuard], component: ApointmentRegistrationComponent },
  { path: 'list', canActivate: [AuthGuard], component: ApointmentListComponent },
  { path: 'edit/:id', canActivate: [AuthGuard], component: ApointmentEditComponent },
  { path: 'detail/:id', canActivate: [AuthGuard], component: ApointmentDetailComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
