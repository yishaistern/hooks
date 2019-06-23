import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ username: string; password: string }>()
);

export const clearLog = createAction(
  '[Log Action] clear'
);

export const emptyLog = createAction(
  '[Log Action] empty'
);


export const addLog = createAction(
  '[Log Action] add',
  props<{console: string}>()
);
