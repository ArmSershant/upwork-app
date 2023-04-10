import { createAction, props } from '@ngrx/store';

const SET_APPLIED_WORK = '[Works Component] set applied works, ';
export const setAppliedWork = createAction(
  SET_APPLIED_WORK,
  props<{ ongoingWorks: any[] }>()
);
// ***async***
const GET_ASYNC_APPLIED_WORK =
  '[Profile Component] get fetched async applied works';
export const getAppliedWorks = createAction(GET_ASYNC_APPLIED_WORK);
