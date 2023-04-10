import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { Work } from 'src/app/models/work.model';

const SET_WORK = '[Works Component] set work';
const GET_WORK = '[Works Component] get work';
const ADD_WORK = '[Works Component] add work';
const APPLY_WORK = '[Works Component] apply work';
const REMOVE_WORK = '[Profile Component] remove work';

export const setWork = createAction(SET_WORK, props<{ works: Work[] }>());
export const getWork = createAction(GET_WORK, props<{ work: Work }>());
export const addWork = createAction(ADD_WORK, props<{ work: Work }>());
export const applyWork = createAction(APPLY_WORK, props<{ work: Work }>());
export const removeWork = createAction(REMOVE_WORK, props<{ work: Work }>());

// ***async***
const ADD_ASYNC_WORK = '[Profile Component add async work]';
const GET_ASYNC_WORKS = '[Works Component] get all async works';
const GET_ASYNC_WORK = '[Works Component] get one async work';
const APPLY_ASYNC_WORK = '[Works Component] apply async work';
const DELETE_ASYNC_WORK = '[Profile Component] delete one async work';
export const getFetchedWorks = createAction(GET_ASYNC_WORKS);
export const createWork = createAction(ADD_ASYNC_WORK, props<{ work: Work }>());
export const applyasyncWork = createAction(
  APPLY_ASYNC_WORK,
  props<{ requiredWork: Work; freelancer: User }>()
);
export const getFetchedSingleWork = createAction(
  GET_ASYNC_WORK,
  props<{ id: number }>()
);

export const deleteasyncWork = createAction(
  DELETE_ASYNC_WORK,
  props<{ id: number }>()
);
