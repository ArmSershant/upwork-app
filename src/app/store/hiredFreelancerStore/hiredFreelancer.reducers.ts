import { createReducer, on } from '@ngrx/store';
import { setHiredFreelancers } from './hiredFreelancer.actions';
import { HiredFreelancerState } from '../state/hiredFreelancerState';
export const initialState: HiredFreelancerState = {
  hiredFreelancers: [],
};
export const HiredFreelancerReducer = createReducer(
  initialState,
  on(setHiredFreelancers, (state, { hiredFreelancers }) => {

    return {
      ...state,
      hiredFreelancers,
    };
  })
);
