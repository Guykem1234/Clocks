import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  addHours(d: Date, hours: number) {
    d.setHours(d.getHours() + hours);
  }
}
