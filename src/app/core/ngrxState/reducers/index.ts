import {
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  Action,
  on
} from '@ngrx/store';
import * as CoreActions from '../actions';
import { City } from '../../models/City';

export const coreFeatureKey = 'core';


export interface CoreState {
  cities: City[],
  selectedCities: City[]
}

export const initialState: CoreState = {
  cities: [],
  selectedCities: []
};

const authReducer = createReducer(
  initialState,
  on(CoreActions.getAllScopesSuccess, (state, action) => {
    return {
      cities: action.cities,
      selectedCities: action.cities.map(c => ({ ...c }))
    };
  }),
  on(CoreActions.selectedCities, (state, action) => {
    return {
      ...state,
      selectedCities: action.cities.map(c => ({ ...c }))
    };
  }),

);

export function reducer(state: CoreState | undefined, action: Action) {
  return authReducer(state, action);
}

//get selectors for the CoreState properties (used by-services,components)
export const core = createFeatureSelector<CoreState>(coreFeatureKey);
export const cities = createSelector(core, (core) => core.cities);
export const selectedCities = createSelector(core, (core) => core.selectedCities);

// export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];

// export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
//   return function (state, action) {
//     console.log('state', state);
//     console.log('action', action);

//     return reducer(state, action);
//   };
// }