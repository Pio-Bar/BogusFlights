import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { FlightDataService } from 'src/app/services/flight-data.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {
  arrivalCity = this.flightData.flight.arrival.city

  constructor(
    private weather: WeatherService,
    private flightData: FlightDataService) { }

    arrivalWeather:any;

  ngOnInit(): void {
    this.weather.getWeather(this.arrivalCity).subscribe((data)=>{
      this.arrivalWeather = data;
    })

  }

}
