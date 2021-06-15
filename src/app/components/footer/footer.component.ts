import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/API.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  localWeather:any
  date: any

  constructor(public APIService: APIService ) { }

  ngOnInit(): void {
    this.date = new(Date)
    setInterval(()=>{this.date = new(Date)},60000)
  
      navigator.geolocation.getCurrentPosition(success, error)
      function success(position:any) {
        const userCoords = {lat: position.coords.latitude, lon: position.coords.longitude}
        weather(userCoords)
      };
      function error() {
        console.log('No permission from user')   
      }

    const weather = (userCoords:any) => {this.APIService.getWeatherByCoords(userCoords).subscribe((data:any)=>{
      this.localWeather = data;
    })}
  }

}
