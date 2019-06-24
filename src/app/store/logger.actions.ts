import { createAction, props } from '@ngrx/store';

export interface LogItem {
  console: string; timestamp: number;
}


export const clearLog = createAction(
  '[Log Action] clear'
);

export const routePage = createAction(
  '[Log Action] routePage'
);

export const createLog = createAction(
  '[Log Action] add',
  props<{console: string}>()
);


export const addLog = createAction(
  '[Log Action] add',
  props<LogItem>()
);
