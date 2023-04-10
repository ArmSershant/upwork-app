import { createReducer, on } from '@ngrx/store';
import { setAppliedWork } from './ongoingWorks.actions';
import { OngoingWorkState } from '../state/ongoingWorksState';
export const initialState: OngoingWorkState = {
  ongoingWorks: [],
};

export const OngoingWorkReducer = createReducer(
  initialState,
  on(setAppliedWork, (state, { ongoingWorks }) => {
    return {
      ...state,
      ongoingWorks,
    };
  })
);
