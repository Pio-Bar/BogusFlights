import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {
  flight = {
    departure: '',
    arrival: '',
    date: '',
    class: '',
    tickets: 1,
  }

  constructor() { }
}
