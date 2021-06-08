import { Component, OnInit } from '@angular/core';
import { FlightDataService } from '../../services/flight-data.service'

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.scss']
})
export class SeatingComponent implements OnInit {
  numOfRows = 10;
  
  constructor(public flightData: FlightDataService) { }
  
  ngOnInit(): void {
    switch (this.flightData.flight.distance){
      case 'local':
        this.numOfRows = 10;
        break
      case 'long':
        this.numOfRows = 20;
        break
      case 'continental':
        this.numOfRows = 30;
    }
    console.log(this.numOfRows)
  }

}
