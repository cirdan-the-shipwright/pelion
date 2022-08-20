import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './_modules/material.module';

import { ActivityFormComponent } from './components/activity-form/activity-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSnackBarComponent } from './components/mat-snack-bar/mat-snack-bar.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivityFormComponent,
    MatSnackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MatSnackBarComponent, {
    provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
  }, {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
