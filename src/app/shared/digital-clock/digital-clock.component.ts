import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit, OnDestroy {

  @Input() seconds: number
  @Input() minutes: number;
  @Input() hours: number;

  interval: any

  constructor() { }


  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.seconds = (this.seconds + 1) % 60
      if (this.seconds == 0)
        this.minutes = (this.minutes + 1) % 60
      if (this.minutes == 0)
        this.hours = (this.hours + 1) % 24
    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

}
