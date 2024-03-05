import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApointmentDetailComponent } from './apointment-detail/apointment-detail.component';
import { ApointmentEditComponent } from './apointment-edit/apointment-edit.component';
import { ApointmentListComponent } from './apointment-list/apointment-list.component';
import { ApointmentRegistrationComponent } from './apointment-registration/apointment-registration.component';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AutenticaInterceptor } from './Interceptor/autentica.interceptor';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ApointmentDetailComponent,
    ApointmentEditComponent,
    ApointmentListComponent,
    ApointmentRegistrationComponent,
    LoginFormComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AutenticaInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
