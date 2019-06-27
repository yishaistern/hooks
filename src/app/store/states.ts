
export interface AppState {
    log: LogState;
  }
export interface LogState {
    entities: object;
    ids: number[];
    selectedLog: string;
    case: string;
  }
