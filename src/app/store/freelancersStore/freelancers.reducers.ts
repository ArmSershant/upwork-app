import { createReducer, on } from '@ngrx/store';
import { FreelancersState } from '../state/freelancerState';
import { setFreelancer } from './freelancers.actions';
export const initialState: FreelancersState = {
  freelancers: [],
};

export const FreelancerReducer = createReducer(
  initialState,
  on(setFreelancer, (state, { freelancers }) => ({
    ...state,
    freelancers: freelancers,
  }))
);
