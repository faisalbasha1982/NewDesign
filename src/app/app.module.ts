import { NgModule, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule,  } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { UiSwitchModule } from 'ngx-ui-switch';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule, MatInputModule, MatTooltipModule } from '@angular/material';
import { MatDialogModule, MatSnackBarModule } from '@angular/material';
import { ModalModule, AlertModule, TimepickerModule } from 'ngx-bootstrap';
import { DatePipe } from '@angular/common';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { CustomersignupComponent } from './customersignup/customersignup.component';
import { SigninComponent } from './signin/signin.component';
import { DropdownskillsComponent } from './dropdownskills/dropdownskills.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export function loggerCallback(logLevel, message, piiEnabled) { console.log('client logging' + message); }

@NgModule({
  declarations: [AppComponent,DropdownComponent, SignupComponent, CustomersignupComponent, SigninComponent, DropdownskillsComponent, DashboardComponent],
  imports: [
    BrowserModule, BrowserAnimationsModule, NoopAnimationsModule, MatAutocompleteModule, MatTooltipModule, MatInputModule,
    MatDialogModule, MatProgressSpinnerModule, MatSnackBarModule, MatProgressButtonsModule, AppRoutingModule, AutocompleteLibModule,
    FormsModule, ReactiveFormsModule, HttpClientModule, AngularFontAwesomeModule, ModalModule.forRoot(),
    AlertModule.forRoot(), TimepickerModule.forRoot(),
    UiSwitchModule.forRoot({
      size: 'small', color: '#fff', switchOffColor: '#C7C7C7', switchColor: 'limegreen', defaultBoColor: '#000', defaultBgColor: '#fff'
    })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  exports: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
