import { Component, OnInit, ViewChild } from '@angular/core';
import { airportsDB } from './airportsDB'
import { FlightDataService } from '../../services/flight-data.service'
import { UserDataService } from '../../services/user-data.service'
import { FormControl, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  control = new FormControl('', Validators.required);
  today = new Date().toISOString().split('T')[0];
  isDuplicate = false;
  routeSeats = '';
  airports = airportsDB;

  departure:any;
  arrival:any;
  class = '';
  date = '';
  tickets = 1;

  constructor(
    public flightData: FlightDataService,
    public userData: UserDataService,
    private router: Router,
    ) { }

  //Sends data about flight to service
  sendData(){
    this.flightData.flight.departure = this.departure
    this.flightData.flight.arrival = this.arrival
    this.flightData.flight.class = this.class
    this.flightData.flight.date = this.date
    this.flightData.flight.tickets = this.tickets
    this.flightData.calculateDistance()
  }

  @ViewChild(LoginComponent)
  private login!: LoginComponent

  // Checks if user is logged in if not opens popup
  isUserLoggedIn(){
    if(!this.userData.userIsLoggedIn){
    this.login.openDialog()
    } else {
      this.sendData()
      this.router.navigate(['/seating']);
    }
  }

  ngOnInit(): void {
    this.flightData.flight.tickets = 1
    this.flightData.flight.seats = []
    this.flightData.flight.luggage = {cabin: false, checkInSmall: false, checkInBig: false,}
    this.flightData.flight.additions = {priority: false, VIP: false, instantCheckIn: false,}
  }
}
