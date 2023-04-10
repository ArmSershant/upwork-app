import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap, switchMap } from 'rxjs';
import { WorkService } from 'src/app/components/services/work.service';
import {
  finishWork,
  finishasyncWork,
  getFinishedWorks,
  rateFinishedWork,
  setFinishedWork,
} from './finishedWorks.actions';
@Injectable()
export class FinishedWorksEffects {
  // when finishing work
  finishWork$ = createEffect(() =>
    this.actions$.pipe(
      ofType(finishasyncWork),
      mergeMap((action) =>
        this.workService.finishWork(action.work, action.id).pipe(
          map((finishedWork) => {
            return finishWork(finishedWork);
          })
        )
      )
    )
  );

  // get all finished works
  loadFinishedWorks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFinishedWorks),
      exhaustMap(() =>
        this.workService.fetchFinishedWorks().pipe(
          map((finishedWorks: any) => {
            return setFinishedWork({ finishedWorks });
          })
        )
      )
    )
  );
  loadRatedFinishedWorks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(rateFinishedWork),
      switchMap((action) =>
        this.workService
          .rateFinishedWork(action.work, action.rating, action.review)
          .pipe(
            map((finishedWorks: any) => {
              return setFinishedWork({ finishedWorks });
            })
          )
      )
    )
  );
  constructor(private actions$: Actions, private workService: WorkService) {}
}
