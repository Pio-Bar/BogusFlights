import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { IsLoggedInGuard } from './guards/is-logged-in.guard';

//Material imports
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

//Components
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
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HeroImgComponent } from './components/hero-img/hero-img.component'

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
    PageNotFoundComponent,
    CountriesComponent,
    HeroImgComponent,
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
    MatTableModule,
    MatTabsModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    LoginComponent,
    IsLoggedInGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
