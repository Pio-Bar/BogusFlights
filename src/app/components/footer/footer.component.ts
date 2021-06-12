import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  localWeather:any

  constructor(public weather: WeatherService ) { }

  getLoc() {
    console.log(this.localWeather)}


  ngOnInit(): void {
      navigator.geolocation.getCurrentPosition(success, error)
      function success(position:any) {
        const userCoords = {lat: position.coords.latitude, lon: position.coords.longitude}
        weather(userCoords)
      };
      function error() {
        console.log('No permission from user')   
      }

    const weather = (userCoords:any) => {this.weather.getWeatherByCoords(userCoords).subscribe((data:any)=>{
      this.localWeather = data;
    })}
  }

}
