import { createAction, props } from '@ngrx/store';

const SET_HIRED_FREELANCER = '[Profile Component] get fetched hired freelancer';
export const setHiredFreelancers = createAction(
  SET_HIRED_FREELANCER,
  props<{ hiredFreelancers: any[] }>()
);
// ***async***
const GET_ASYNC_HIRED_FREELANCER =
  '[Profile Component] get fetched async hired freelancer';
export const getFetchedHiredFreelancers = createAction(GET_ASYNC_HIRED_FREELANCER);

