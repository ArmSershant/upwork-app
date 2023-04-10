import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import {
  getFetchedHiredFreelancers,
  setHiredFreelancers,
} from './hiredFreelancer.actions';
import { FreelancersService } from 'src/app/components/services/Freelancers.service';
@Injectable()
export class HiredFreelancerEffects {
  getHiredFreelancer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFetchedHiredFreelancers),
      exhaustMap(() =>
        this.freelancersService.fetchHiredFreelancer().pipe(
          map((hiredFreelancers: any) => {
            return setHiredFreelancers({ hiredFreelancers });
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
