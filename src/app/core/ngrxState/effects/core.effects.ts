import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import * as CoreActions from '../actions';
import { Action } from '@ngrx/store';
import { HttpService } from '../../services/httpService/http.service';

@Injectable()
export class CoreEffects implements OnInitEffects {

  constructor(
    private actions$: Actions,
    private http: HttpService
  ) {
  }

  //this is where we start the initialization of the entire project
  ngrxOnInitEffects(): Action {
    return CoreActions.coreInit();
  }

  //on action coreInit we take all the data needed from the local storage or the server 
  //for first initialize the core module
  init$ = createEffect(() => this.actions$.pipe(
    ofType(CoreActions.coreInit),
    map(() => {
      return CoreActions.getAllCities();
    })
  ));

  // get the list of cities from http service
  getCities$ = createEffect(() => this.actions$.pipe(
    ofType(CoreActions.getAllCities),
    switchMap(() => {
      return this.http.getCities();
    }),
    map((cities) => {
      if (cities) {
        return CoreActions.getAllScopesSuccess({ cities });
      }
      return CoreActions.getAllScopesError();
    })
  ));
}

