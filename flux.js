// class Store {
//   constructor(reducer, initState) {
//     this.reducer = reducer;
//     this.curState = initState;
//   }

//   // 订阅者
//   subscribers = [];

//   // 当前state
//   curState;

//   // 获得当前state
//   getState() {
//     return this.curState;
//   }

//   // 添加订阅
//   subscribe(fn) {
//     this.subscribers = [...this.subscribers, fn];
//   }

//   // 分发消息
//   dispatch(action) {
//     this.curState = this.reducer(this.curState, action);
//     this.subscribers.forEach((fn) => fn(this.curState));
//   }
// }

// function todoReducer(state, action) {
//   // 深拷贝state以实现immutable
//   const stateCopy = JSON.parse(JSON.stringify(state));

//   switch (action.type) {
//     case "ADD_TODO":
//       return {
//         ...stateCopy,
//         todo: stateCopy.todo.concat(action.payload),
//       };
//     case "REMOVE_TODO":
//       return {
//         ...stateCopy,
//         todo: stateCopy.todo.filter((el) => el.key !== action.payload),
//       };
//     default:
//       return state;
//   }
// }

// const TodoStore = new Store(todoReducer, { todo: [] });
