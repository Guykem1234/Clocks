import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements OnInit, OnDestroy {


  @Input() seconds: number
  @Input() minutes: number;
  @Input() hours: number;

  secondsDegrees: number
  minsDegrees: number
  hourDegrees: number

  interval: any

  constructor() { }


  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.seconds = (this.seconds + 1) % 60
      if (this.seconds == 0)
        this.minutes = (this.minutes + 1) % 60
      if (this.minutes == 0)
        this.hours = (this.hours + 1) % 24

      this.secondsDegrees = ((this.seconds / 60) * 360) + 90;
      this.minsDegrees = ((this.minutes / 60) * 360) + ((this.seconds / 60) * 6) + 90;
      this.hourDegrees = ((this.hours / 12) * 360) + ((this.minutes / 60) * 30) + 90;
    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

}
