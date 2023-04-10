import { createSelector } from '@ngrx/store';
import { IState } from '../state/state';
import { FreelancersState } from '../state/freelancerState';

export const selectFeature = (state: IState) => state.freelancers;
export const selectFreelancers = createSelector(
  selectFeature,
  (state: FreelancersState) => state.freelancers
);
