import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap } from 'rxjs';
import {
  filterBySalary,
  getFetchedFreelancers,
  hireFreelancer,
  hireasyncFreelancer,
  searchBySalary,
  setFreelancer,
} from './freelancers.actions';
import { FreelancersService } from 'src/app/components/services/Freelancers.service';
@Injectable()
export class FreelancersEffects {
  loadFreelancers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFetchedFreelancers),
      exhaustMap(() =>
        this.freelancersService.fetchFreelancers().pipe(
          map(({ freelancers }) => {
            return setFreelancer({ freelancers });
          })
        )
      )
    )
  );
  hireFreelancer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(hireasyncFreelancer),
      mergeMap((action) =>
        this.freelancersService.hire(action.freelancerId, action.id).pipe(
          map((res) => {
            return hireFreelancer(res);
          })
        )
      )
    )
  );

  searchFreelanser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchBySalary),
      exhaustMap((action) =>
        this.freelancersService.fetchSearchBySalary(action.salaryRange).pipe(
          map((res) => {
            return setFreelancer(res);
          })
        )
      )
    )
  );

  filterFreelancer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(filterBySalary),
      exhaustMap((action) =>
        this.freelancersService.fetchFilterBySalary(action.ascending).pipe(
          map((res) => {
            return setFreelancer(res);
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private freelancersService: FreelancersService
  ) {}
}
