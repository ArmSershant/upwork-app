import { createReducer, on } from '@ngrx/store';
import { setFinishedWork } from './finishedWorks.actions';
import { FinishedWorkState } from '../state/finishedWorksState';
export const initialState: FinishedWorkState = {
  finishedWorks: [],
};

export const FinishedWorkReducer = createReducer(
  initialState,
  on(setFinishedWork, (state, { finishedWorks }) => {
    return {
      ...state,
      finishedWorks,
    };
  })
);
