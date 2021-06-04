import { Component, OnInit, ViewChild } from '@angular/core';
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
  routeSeats = ''

  departure = '';
  arrival = '';
  class = '';
  date = '';
  tickets = 1;

  airports = [
    {code: 'LAX', city:'Los Angeles'},
    {code: 'DXB', city:'Dubai'},
    {code: 'HND', city:'Tokyo'},
    {code: 'LHR', city:'London'},
  ]

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
  }

  @ViewChild(LoginComponent)
  private login!: LoginComponent

  // Checks if user is logged in if not opens popup
  isUserLoggedIn(){
    console.log(this.userData.userIsLoggedIn)
    if(!this.userData.userIsLoggedIn){
    this.login.openDialog()
    } else {
      this.sendData()
      this.router.navigate(['/display']);
    }
  }

  ngOnInit(): void {
  }
}
