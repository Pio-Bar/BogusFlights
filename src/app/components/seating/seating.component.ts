import { Component, OnInit } from '@angular/core';
import { FlightDataService } from '../../services/flight-data.service';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.scss']
})
export class SeatingComponent implements OnInit {
  numOfRows!:number[];
  numOfPremiumRows!:number[];

  seats = this.flightData.flight.seats;
  numOfTickets = this.flightData.flight.tickets;
  isPremium:any;
  
  constructor(public flightData: FlightDataService) { }
  
  ngAfterViewInit(){this.highlightSelected()}
  ngOnInit(): void {
    this.isPremium = this.flightData.flight.class === 'premium'? true:false

    switch (this.flightData.flight.distance){
      case 'local':
        this.numOfRows = this.numToArray(8);
        this.numOfPremiumRows = this.numToArray(4);
        break
      case 'long':
        this.numOfRows = this.numToArray(11);
        this.numOfPremiumRows = this.numToArray(7);
        break
      case 'continental':
        this.numOfRows = this.numToArray(19);
        this.numOfPremiumRows = this.numToArray(9);
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
