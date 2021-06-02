import { Component, OnInit } from '@angular/core';
import { FlightDataService } from '../../services/flight-data.service'
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  control = new FormControl('', Validators.required);
  today = new Date().toISOString().split('T')[0];

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

  constructor(public flightData: FlightDataService) { }

  sendData(){
    this.flightData.flight.departure = this.departure
    this.flightData.flight.arrival = this.arrival
    this.flightData.flight.class = this.class
    this.flightData.flight.date = this.date
    this.flightData.flight.tickets = this.tickets
  }
  validateForm(){
    return !this.control.hasError('required')
  }

  ngOnInit(): void {
  }
}
