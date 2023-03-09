import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/core/models/City';
import { DateService } from 'src/app/core/services/dateService/date.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  @Input() city: City;

  seconds: number
  minutes: number;
  hours: number;

  constructor(private dateService: DateService) {

  }

  ngOnInit(): void {
    const date = new Date()

    this.dateService.addHours(date, this.city.hourDiff)
    this.seconds = date.getSeconds();
    this.minutes = date.getMinutes();
    this.hours = date.getHours();
  }

}
