/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  login,
  loginFail,
  loginSuccess,
  recoverPassword,
  recoverPasswordFail,
  recoverPasswordSuccess,
} from 'src/store/login/login.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { of } from 'rxjs';
import { register, registerFail, registerSuccess } from 'src/store/register/register.actions';
import { UserRegister } from 'src/app/model/user/UserRegister';

@Injectable()
export class RegisterEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap((payload: { userRegister: UserRegister }) =>
        this.authService.register(payload.userRegister).pipe(
          map(() => registerSuccess()),
          catchError((error) => of(registerFail({ error })))
        )
      )
    )
  );
}
