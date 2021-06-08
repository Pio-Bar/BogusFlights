import { Component, OnInit } from '@angular/core';
import { FlightDataService } from '../../services/flight-data.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(public flightData: FlightDataService) { }

  // toggleCabin(){
  //   this.flightData.flight.luggage.cabin = !this.flightData.flight.luggage.cabin
  // }
  // toggleCheckInSmall(){
  //   this.flightData.flight.luggage.checkInSmall = !this.flightData.flight.luggage.checkInSmall
  //  }
  //  toggleCheckInBig(){
  //   this.flightData.flight.luggage.checkInBig = !this.flightData.flight.luggage.checkInBig
  //  }
   

  ngOnInit(): void {
  }

}
