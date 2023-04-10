import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { getFetchedUser, getUser } from './user.actions';
@Injectable()
export class UserEffects {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFetchedUser),
      exhaustMap(() =>
        this.tokenService.fetchUser().pipe(
          map((res) => {
            return getUser({ user: res });
          })
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private tokenService: TokenStorageService
  ) {}
}
