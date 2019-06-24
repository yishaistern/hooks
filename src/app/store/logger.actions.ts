import { createAction, props } from '@ngrx/store';

export interface LogItem {
  console: string; timestamp: number;
}


export const clearLog = createAction(
  '[Log Action] clear'
);

export const clearLogAndChngeTitle = createAction(
  '[Log Action] clear title',
  props<{tittle: string}>()
);

export const routePage = createAction(
  '[Log Action] routePage',
  props<{tittle: string}>()
);

export const createLog = createAction(
  '[Log Action] add',
  props<{console: string}>()
);


export const addLog = createAction(
  '[Log Action] add',
  props<LogItem>()
);
