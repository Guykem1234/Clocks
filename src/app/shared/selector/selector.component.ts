import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { City } from 'src/app/core/models/City';
import * as Actions from 'src/app/core/ngrxState/actions';
import { cities, selectedCities } from 'src/app/core/ngrxState/reducers';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
})
export class SelectorComponent implements OnInit {

  selectedCities: City[]
  cities: City[]

  constructor(private store: Store<any>) {

  }

  ngOnInit(): void {
    this.store.select(cities).subscribe(cities => {
      this.cities = cities.map(v => v);
      this.selectedCities = cities.map(v => v);
    });

    setInterval(() => {
      console.log(this.cities)
    }, 1000)
  }

  onCitiesSelected() {
    debugger
    if (this.selectedCities.length)
      this.store.dispatch(Actions.selectedCities({ cities: this.selectedCities.map(c => c) }));
  }

}
