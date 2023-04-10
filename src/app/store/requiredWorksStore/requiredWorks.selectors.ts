import { createSelector } from '@ngrx/store';
import { IState } from '../state/state';
import { RequiredWorksState } from '../state/requiredWorksState';
export const selectFeature = (state: IState) => state.requiredWorks;
export const selectRequiredWorks = createSelector(
  selectFeature,
  (state: RequiredWorksState) => {
    return state.requiredWorks;
  }
);
