import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/API.service';
import { FlightDataService } from 'src/app/services/flight-data.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {
  arrivalCity = this.flightData.flight.arrival.city
  distance = this.flightData.flight.distance
  class = this.flightData.flight.class
  numOfTickets = this.flightData.flight.tickets
  flightCost = this.calculateFlightCost()
  luggageCost= this.calculateLuggageCost()
  additionsCost = this.calculateAdditionsCost()
  ticketTotal = this.calculateTotal()
  priceDisplay = this.ticketTotal * this.numOfTickets
  currencyInput = 'USD';
  exchangeRates:any

  constructor(
    private APIService: APIService,
    public flightData: FlightDataService) { }

    arrivalWeather:any;

    calculateFlightCost(){
      let cost = 0
     switch(this.flightData.flight.distance){
       case 'local':
          cost = 50
          break;
       case 'long':
          cost = 200
          break;
       case 'continental':
          cost = 400
     }
     this.flightData.flight.class === 'premium'? cost = cost*1.3 : ''
     return cost
    }

    calculateLuggageCost(){
      let cost = 0;
      this.flightData.flight.luggage.cabin ? cost += 15 : ''
      this.flightData.flight.luggage.checkInSmall ? cost += 30 : ''
      this.flightData.flight.luggage.checkInBig ? cost += 50 : ''
      return cost
    }

    calculateAdditionsCost(){
      let cost = 0;
      this.flightData.flight.additions.priority ? cost += 15 : ''
      this.flightData.flight.additions.instantCheckIn ? cost += 10 : ''
      this.flightData.flight.additions.VIP ? cost += 70 : ''
      return cost
    }

    calculateTotal(){
      let cost = this.flightCost + this.luggageCost + this.additionsCost;
      return cost
    }

    exchangePrice(){
      let rateInput = this.exchangeRates.conversion_rates[this.currencyInput];
      this.priceDisplay = this.ticketTotal * rateInput * this.numOfTickets
    }

  ngOnInit(): void {
    this.APIService.getExchangeRates().subscribe((data)=>{
      this.exchangeRates = data;
    })

    this.APIService.getWeather(this.arrivalCity).subscribe((data)=>{
      this.arrivalWeather = data;
    })
  }
}
