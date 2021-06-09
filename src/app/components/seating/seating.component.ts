import { Component, OnInit } from '@angular/core';
import { FlightDataService } from '../../services/flight-data.service';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.scss']
})
export class SeatingComponent implements OnInit {
  numOfRows!:number[];
  seats = this.flightData.flight.seats;
  numOfTickets = this.flightData.flight.tickets;
  
  constructor(public flightData: FlightDataService) { }
  
  ngOnInit(): void {
    switch (this.flightData.flight.distance){
      case 'local':
        this.numOfRows = this.numToArray(12);
        break
      case 'long':
        this.numOfRows = this.numToArray(18);
        break
      case 'continental':
        this.numOfRows = this.numToArray(28);
    }
  }
   //Converts a number to an array eg.(5 = [1,2,3,4,5])
  numToArray(length:number) {
    return Array.from({length: length}, (v, i) => i + 1);
  }

  //Highlights selected seats by their ID
  highlightSelected(){
    for(let seat of this.seats){
      let elem = document.getElementById(seat);
      elem!.classList.toggle('selected')
    }
  }

  //Add/remove seat from flight details
  toggleSeat(event:any){
    let seatID:any = event.target.innerText;
    this.highlightSelected();
    if (this.seats.includes(seatID)){
      this.seats.splice(this.seats.indexOf(seatID),1);
    } else if (!this.enoughTickets()) {
      this.seats.push(seatID);
    }
    this.highlightSelected();
  } 

  //returns true if user selected enough seats
  enoughTickets(){
    if(this.numOfTickets <= this.seats.length){
      return true
    } return false

  }
}
