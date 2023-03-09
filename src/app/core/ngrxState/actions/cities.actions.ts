import { City } from "../../models/City";
import { createAction, props } from '@ngrx/store';

export const coreInit = createAction(
    '[Core] init'
);

export const getAllCities = createAction(
    '[Core] Get All Cities',
);

export const getAllScopesSuccess = createAction(
    '[Core] Get All Cities Success',
    props<{ cities: City[]; }>()
);

export const getAllScopesError = createAction(
    '[Core] Get All Cities Error'
);

export const selectedCities = createAction(
    '[Core] Select Scope',
    props<{ cities: City[]; }>()
);
