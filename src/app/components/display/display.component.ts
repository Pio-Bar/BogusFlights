import { Component, OnInit } from '@angular/core';
import { FlightDataService} from '../../services/flight-data.service'
import { UserDataService } from '../../services/user-data.service'
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  loggedUser:any;
  message: any;
  flight: any = this.flightData.flight;
  constructor(private flightData: FlightDataService,
    private userData: UserDataService) { }

  getMessage(){
    this.message = this.flightData.flight
    this.loggedUser = this.userData
    console.log(this.message, this.loggedUser)
   }
  ngOnInit(): void {
  }

}
