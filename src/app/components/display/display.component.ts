import { Component, OnInit } from '@angular/core';
import { FlightDataService} from '../../services/flight-data.service'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  message: any;
  flight: any = this.flightData.flight;
  constructor(private flightData: FlightDataService) { }

  getMessage(){
    this.message = this.flight
    console.log(this.message)
   }
  ngOnInit(): void {
  }

}
