import { createAction, props } from '@ngrx/store';
import { FinishedWork } from 'src/app/models/finishedWork.model';
import { Work } from 'src/app/models/work.model';

const SET_FINISHED_WORK = '[Works Component] set finished works, ';
export const setFinishedWork = createAction(
  SET_FINISHED_WORK,
  props<{ finishedWorks: Work[] }>()
);
// ***async***
const GET_ASYNC_FINISHED_WORK =
  '[Profile Component] get fetched async finished works';
export const getFinishedWorks = createAction(GET_ASYNC_FINISHED_WORK);

const FINISH_WORK = '[Profile Component] finish work';
export const finishWork = createAction(FINISH_WORK, props<{ work: Work }>());
const FINISH_ASYNC_WORK = '[Profile Component] finish async work';
const RATE_FINISHED_ASYNC_WORK = '[Profile Component] rate finished async work';
export const finishasyncWork = createAction(
  FINISH_ASYNC_WORK,
  props<{ work: FinishedWork; id: number }>()
);

export const rateFinishedWork = createAction(
  RATE_FINISHED_ASYNC_WORK,
  props<{ work: Work; rating: number; review: string }>()
);
