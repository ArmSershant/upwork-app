import { createReducer, on } from '@ngrx/store';
import { UserState } from '../state/userState';
import { getUser } from './user.actions';
import { User } from 'src/app/models/user.model';
export const initialState: UserState = {
  user: {} as User,
};

export const UserReducer = createReducer(
  initialState,
  on(getUser, (state, { user }) => {
    return { ...state, user: user };
  })
);
