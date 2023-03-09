import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { City } from '../../models/City';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  timeoutMilliseconds: number;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.timeoutMilliseconds = 100000;
  }

  /**
   * Return all cities info from json in assets
   * @returns: City[]
   */
  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>("/assets/cities.json").pipe(
      timeout(this.timeoutMilliseconds),
    );
  }

}
