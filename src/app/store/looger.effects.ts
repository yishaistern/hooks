import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as logActions from './logger.actions';
@Injectable()
export class LogEffects {
    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType('[Log Action] routePage'),
        map((action: any) => {
            return (logActions.clearLogAndChngeTitle({ tittle: action.tittle}));
        })
        )
      );

      newCAse$ = createEffect(() => this.actions$.pipe(
        ofType('[Log Action] new case'),
        map((action: any) => {
            return (logActions.clearLogAndChngeTitle({ subTitle: action.tittle}));
        })
        )
      );

      addLog$ = createEffect(() => this.actions$.pipe(
        ofType( '[Log Action] create log'),
        map((action: any) => {
            return (logActions.addLog({ console: action.console, timestamp: (new Date()).getTime()}));
        })
        )
      );
      constructor(
        private actions$: Actions,
    ) {}
}
