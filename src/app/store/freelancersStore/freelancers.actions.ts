import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

const SET_FREELANCER = '[Freelancers Component] set freelancer, ';
const HIRE_FREELANCER = '[Freelancers Component] hire freelancer';
export const setFreelancer = createAction(
  SET_FREELANCER,
  props<{ freelancers: User[] }>()
);
export const hireFreelancer = createAction(
  HIRE_FREELANCER,
  props<{ freelancer: User }>()
);

// ***async***
const GET_FREELANCERS = '[Freelancers Component] get all async freelancers';
const HIRE_ASYNC_FREELANCER = '[Freelancers Component] hire async freelancer';
const SEARCH_BY_ASYNC_SALARY = '[Freelancers Component] search by salary';
const FILTER_BY_SALARY = '[Freelancers Component] filter by salary';
export const getFetchedFreelancers = createAction(GET_FREELANCERS);
export const hireasyncFreelancer = createAction(
  HIRE_ASYNC_FREELANCER,
  props<{ freelancerId: number; id: number }>()
);

export const searchBySalary = createAction(
  SEARCH_BY_ASYNC_SALARY,
  props<{ salaryRange: number }>()
);

export const filterBySalary = createAction(
  FILTER_BY_SALARY,
  props<{ ascending: boolean }>()
);
