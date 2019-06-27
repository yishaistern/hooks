import { createAction, props } from '@ngrx/store';

export interface LogItem {
  console: string; timestamp: number;
}


export const clearLog = createAction(
  '[Log Action] clear'
);

export const clearLogAndChngeTitle = createAction(
  '[Log Action] clear title or sub title',
  props<{tittle?: string, subTitle?: string}>()
);

export const routePage = createAction(
  '[Log Action] routePage',
  props<{tittle: string}>()
);

export const newCase = createAction(
  '[Log Action] new case',
  props<{tittle: string}>()
);


export const createLog = createAction(
  '[Log Action] create log',
  props<{console: string}>()
);


export const addLog = createAction(
  '[Log Action] add log',
  props<LogItem>()
);
