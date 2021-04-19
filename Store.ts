class Store {
  private dispatcher: Function;
  private curState: string | number | boolean | object;

  constructor(dispatcher, initState) {
    this.dispatcher = dispatcher;
    this.curState = initState;
  }
}
