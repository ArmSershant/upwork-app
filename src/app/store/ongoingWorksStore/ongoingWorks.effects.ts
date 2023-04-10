import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { WorkService } from 'src/app/components/services/work.service';
import { getAppliedWorks, setAppliedWork } from './ongoingWorks.actions';
@Injectable()
export class OngoingWorksEffects {
  loadAppliedWorks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAppliedWorks),
      exhaustMap(() =>
        this.workService.fetchAppliedWorks().pipe(
          map((ongoingWorks: any) => {
            return setAppliedWork({ ongoingWorks });
          })
        )
      )
    )
  );
  constructor(private actions$: Actions, private workService: WorkService) {}
}
