import * as logActions from './logger.actions';
import { Action, createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AppState, LogState } from './states';

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

export const logReducer = createReducer(initialState,
    on(logActions.clearLog, (state, {}) => {
        return adapter.removeAll(state);
    }),
    on(logActions.clearLogAndChngeTitle, (state, prop) => {
        state.selectedLog = prop.tittle;
        return adapter.removeAll(state);
    }),
        on(logActions.addLog, (state, item: logActions.LogItem) => {
        return adapter.addOne(item, state);
    }));

export const selectLog = (state: AppState) => state.log;
export const selectFeature = createFeatureSelector<AppState, LogState>('log');
export const selectFeatureCount = createSelector(
    selectFeature,
      (state: LogState) => state
    );
