import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getWeather(city:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4cf1f3252ace20bbf27939b7c2c38395&units=metric`)
  }

  getWeatherByCoords(coords:any){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=4cf1f3252ace20bbf27939b7c2c38395&units=metric`)
  }

  getExchangeRates(){
    return this.http.get('https://v6.exchangerate-api.com/v6/6f7a6339ec22c17f75391f63/latest/USD/')
  }
}us