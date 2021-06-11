import { Component, OnInit } from '@angular/core';
import { FlightDataService } from '../../services/flight-data.service'
import { UserDataService } from '../../services/user-data.service'

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  departure = this.flightData.flight.departure
  arrival = this.flightData.flight.arrival
  dateOfFlight = this.flightData.flight.date
  seats = this.flightData.flight.seats
  luggage = this.flightData.flight.luggage
  additions = this.flightData.flight.additions

  firstName = this.UserData.loggedInUser.firstName
  lastName = this.UserData.loggedInUser.lastName
  qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${this.departure.code +'-'+ this.arrival.code} ${this.lastName}`

  constructor(
    private flightData: FlightDataService,
    private UserData: UserDataService) { }

  ngOnInit(): void {
  }

}
