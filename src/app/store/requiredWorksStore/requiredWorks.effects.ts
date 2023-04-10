import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { WorkService } from 'src/app/components/services/work.service';
import {
  getRequiredWorks,
  requireWork,
  requireasyncwork,
  setRequiredWork,
} from './requiredWorks.actions';
@Injectable()
export class RequiredWorksEffects {
  requireWork$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requireasyncwork),
      exhaustMap((action) =>
        this.workService.require(action.work, action.id, action.clientId).pipe(
          map((res) => {
            return requireWork({
              work: res.workId,
              id: res.id,
              clientId: res.clientId,
            });
          })
        )
      )
    )
  );

  loadRequiredWorks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRequiredWorks),
      exhaustMap(() =>
        this.workService.fetchRequiredWorks().pipe(
          map((data: any) => {
            return setRequiredWork({ requiredWorks: data.requiringWork });
          })
        )
      )
    )
  );
  constructor(private actions$: Actions, private workService: WorkService) {}
}
