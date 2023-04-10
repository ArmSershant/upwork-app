import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap } from 'rxjs';
import { WorkService } from 'src/app/components/services/work.service';
import {
  addWork,
  applyWork,
  applyasyncWork,
  createWork,
  deleteasyncWork,
  getFetchedSingleWork,
  getFetchedWorks,
  getWork,
  removeWork,
  setWork,
} from './work.actions';
@Injectable()
export class WorkEffects {
  // add work
  addWork$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createWork),
      mergeMap((action) =>
        this.workService
          .postWork(action.work)
          .pipe(map((res) => addWork({ work: res })))
      )
    )
  );
  // load all works
  loadWorks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFetchedWorks),
      exhaustMap(() =>
        this.workService.fetchWorks().pipe(
          map(({ works }) => {
            return setWork({ works });
          })
        )
      )
    )
  );
  // apply reqruired work
  applyRequiredWork$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applyasyncWork),
      exhaustMap((action) =>
        this.workService.apply(action.requiredWork, action.freelancer).pipe(
          map((res) => {
            return applyWork({ work: res });
          })
        )
      )
    )
  );
  // single work
  getSignleWork$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFetchedSingleWork),
      exhaustMap((action) =>
        this.workService.fetchSingleWork(action.id).pipe(
          map((work) => {
            return getWork(work);
          })
        )
      )
    )
  );
  // delete work
  deleteSingleWork$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteasyncWork),
      exhaustMap((action) =>
        this.workService.deleteWork(action.id).pipe(
          map((id) => {
            return removeWork(id);
          })
        )
      )
    )
  );
  constructor(private actions$: Actions, private workService: WorkService) {}
}
