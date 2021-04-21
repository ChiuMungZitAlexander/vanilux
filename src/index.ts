interface IStore {
  subscribe: (subscribeFn: ISubscribeFn) => void;
  dispatch: (action: IAction) => void;
}

interface IDispatcher {
  <T>(action: IAction, curState: T): T;
}

interface IAction {
  type: string;
}

interface ISubscribeFn {
  (curState: unknown): void;
}

export function createStore(
  dispatcher: IDispatcher,
  initState: unknown
): IStore {
  const subscribers: ISubscribeFn[] = [];
  let curState = initState;

  return {
    subscribe: (subscriberFn) => {
      subscribers.push(subscriberFn);
    },
    dispatch: (action) => {
      curState = JSON.parse(JSON.stringify(dispatcher(action, curState)));
      subscribers.forEach((subscriberFn) => subscriberFn(curState));
    },
  };
}
