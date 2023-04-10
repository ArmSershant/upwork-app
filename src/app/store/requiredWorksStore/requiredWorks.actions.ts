import { createAction, props } from '@ngrx/store';
import { Work } from 'src/app/models/work.model';

const REQUIRE_WORK = '[Works Component] require work';
const SET_REQUIRED_WORK = '[Works Component] set required works, ';

export const requireWork = createAction(
  REQUIRE_WORK,
  props<{ work: Work; id: number; clientId: number }>()
);
export const setRequiredWork = createAction(
  SET_REQUIRED_WORK,
  props<{ requiredWorks: any[] }>()
);

//***async***
const REQUIRE_ASYNC_WORK = '[Works Component] require async work';
const GET_ASYNC_REQUIRED_WORK =
  '[Profile Component] get fetched async required works';
export const requireasyncwork = createAction(
  REQUIRE_ASYNC_WORK,
  props<{ work: Work; id: number; clientId: number }>()
);
export const getRequiredWorks = createAction(GET_ASYNC_REQUIRED_WORK);
