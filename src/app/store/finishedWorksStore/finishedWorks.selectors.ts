import { createSelector } from '@ngrx/store';
import { IState } from '../state/state';
export const selectFeature = (state: IState) => state.finishedWorks.finishedWorks;
export const selectFinishedWorks = createSelector(selectFeature, (state) => {
  return state;
});
