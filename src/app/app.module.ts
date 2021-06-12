import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Material imports!
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { DisplayComponent } from './components/display/display.component';
import { LoginComponent } from './components/login/login.component';
import { DialogLogin } from './components/login/login.component';
import { SeatingComponent } from './components/seating/seating.component';
import { DetailsComponent } from './components/details/details.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { SummaryComponent } from './components/summary/summary.component';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DestinationsComponent,
    DisplayComponent,
    LoginComponent,
    DialogLogin,
    SeatingComponent,
    DetailsComponent,
    TicketComponent,
    ThanksComponent,
    SummaryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule,
    MatRippleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    LoginComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
