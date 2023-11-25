import { deepCopy } from "./utils";

export type ActionType<AT, K = string | number> = {
  id: K;
  payload: AT;
};

export type ReducerType<S, AT> = (
  currentState: S,
  action: AT
) => typeof currentState;

export class Store<T, U> {
  private _state: T;
  private _reducer: ReducerType<T, U>;

  constructor(reducer: ReducerType<T, U>, initState: T) {
    this._state = initState;
    this._reducer = reducer;
  }

  get state() {
    return this._state;
  }

  dispatch(action: U) {
    const stateCopy = deepCopy(this._state);
    this._state = this._reducer(stateCopy, action);
  }
}

export const createStore = <T, U>(reducer: ReducerType<T, U>, initState: T) =>
  new Store<T, U>(reducer, initState);
