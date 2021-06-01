import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  airports = [
    {code: 'LAX', city:'Los Angeles'},
    {code: 'DXB', city:'Dubai'},
    {code: 'HND', city:'Tokyo'},
    {code: 'LHR', city:'London'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
