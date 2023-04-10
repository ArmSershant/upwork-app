import { createSelector } from '@ngrx/store';
import { IState } from '../state/state';
import { HiredFreelancerState } from '../state/hiredFreelancerState';
export const selectFeature = (state: IState) => state.hiredFreelancers;
export const selectHiredFreelancer = createSelector(
  selectFeature,
  (state: HiredFreelancerState) => {
    return state.hiredFreelancers;
  }
);
