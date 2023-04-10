import { createSelector } from '@ngrx/store';
import { IState } from '../state/state';
import { WorkState } from '../state/workState';

export const selectFeature = (state: IState) => state.works;
export const selectWorks = createSelector(selectFeature, (state: WorkState) => {
  return state.works;
});
export const selectWork = createSelector(selectFeature, (state: WorkState) => {
  return state.work;
});
