import { createReducer, on } from '@ngrx/store';
import { setRequiredWork } from './requiredWorks.actions';
import { RequiredWorksState } from '../state/requiredWorksState';
export const initialState: RequiredWorksState = {
  requiredWorks: [],
};
export const RequiredWorksReducer = createReducer(
  initialState,
  on(setRequiredWork, (state, { requiredWorks }) => {
    return {
      ...state,
      requiredWorks,
    };
  })
);
