import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FlightDataService } from '../../services/flight-data.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  seats = this.flightData.flight.seats

  constructor(public flightData: FlightDataService) { }
  @Output() toggleSeatEvent = new EventEmitter();

  removeSeat($event:any) {
    this.toggleSeatEvent.emit($event);
  }

  ngOnInit(): void {
  }

}
