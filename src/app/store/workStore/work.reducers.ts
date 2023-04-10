import { createReducer, on } from '@ngrx/store';
import { getWork, setWork } from './work.actions';
import { WorkState } from '../state/workState';
import { Work } from 'src/app/models/work.model';
export const initialState: WorkState = {
  works: [],
  work: {} as Work,
};

export const WorkReducer = createReducer(
  initialState,
  on(setWork, (state, { works }) => ({ ...state, works: works })),
  on(getWork, (state, { work }) => ({ ...state, work: work })),
);
