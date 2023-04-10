import { createSelector } from '@ngrx/store';
import { IState } from '../state/state';
export const selectFeature = (state: IState) => state.ongoingWorks.ongoingWorks;
export const selectAppliedWorks = createSelector(selectFeature, (state) => {
  return state;
});
