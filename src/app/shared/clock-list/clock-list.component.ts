import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { City } from 'src/app/core/models/City';
import { selectedCities } from '../../core/ngrxState/reducers';

@Component({
  selector: 'app-clock-list',
  templateUrl: './clock-list.component.html',
  styleUrls: ['./clock-list.component.css']
})
export class ClockListComponent implements OnInit {

  displayedCities$: Observable<City[]>

  constructor(private store: Store<any>) {
    this.displayedCities$ = this.store.select(selectedCities)
  }

  ngOnInit(): void {
  }

}
