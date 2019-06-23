import * as logActions from './logger.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface State extends EntityState<logActions.LogItem> {
    // additional entities state properties
    selectedLog: string | null;
}

export function selectLogId(a: logActions.LogItem): number {
    // In this case this would be optional since primary key is id
    return a.timestamp;
}

export function sortByTime(a: logActions.LogItem, b: logActions.LogItem): number {
    return (a.timestamp + '').localeCompare(b.timestamp + '');
  }

export const adapter: EntityAdapter<logActions.LogItem> = createEntityAdapter<logActions.LogItem>({
    selectId: selectLogId,
    sortComparer: sortByTime,
  });

export const initialState: State = adapter.getInitialState({
    // additional entity state properties
    selectedLog: null,
 });

const logReducer = createReducer(initialState,
    on(logActions.clearLog, (state, {}) => {
        return adapter.removeAll(state);
    }),
        on(logActions.addLog, (state, item: logActions.LogItem) => {
        return adapter.addOne(item, state);
    }));
