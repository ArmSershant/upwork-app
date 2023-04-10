import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

const GET_LOGGED_USER = '[Profile Component] get fetched user';
export const getUser = createAction(GET_LOGGED_USER, props<{ user: User }>());

const GET_ASYNC_LOGGED_USER = '[Profile Component] get fetched async user';
export const getFetchedUser = createAction(GET_ASYNC_LOGGED_USER);
