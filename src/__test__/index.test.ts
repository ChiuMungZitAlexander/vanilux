import { expect, test } from "vitest";

import { createStore, type ReducerType, type ActionType } from "src";

enum TodoListItemType {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE",
}

enum TodoListActionType {
  ADD = "ADD",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

type TodoListItem = {
  id: string;
  type: TodoListItemType;
  title: string;
};

type AddTodoAction = ActionType<TodoListItem, TodoListActionType>;
type UpdateTodoAction = ActionType<TodoListItem, TodoListActionType>;
type DeleteTodoAction = ActionType<
  Pick<TodoListItem, "id">,
  TodoListActionType
>;

type TodoListActions = AddTodoAction | UpdateTodoAction | DeleteTodoAction;

const reducer: ReducerType<TodoListItem[], TodoListActions> = (
  state,
  action
) => {
  switch (action.id) {
    case TodoListActionType.ADD: {
      const _action = action as AddTodoAction;
      return [...state, _action.payload];
    }
    case TodoListActionType.UPDATE: {
      const _action = action as UpdateTodoAction;
      return state.map((item) =>
        item.id === action.payload.id ? _action.payload : item
      );
    }
    case TodoListActionType.DELETE: {
      return state.filter((item) => item.id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const store = createStore<TodoListItem[], TodoListActions>(reducer, []);

test("Initial store should be empty array", () => {
  expect(store.state).toStrictEqual([]);
});

test("Store should be with todo list items after action of add", () => {
  store.dispatch({
    id: TodoListActionType.ADD,
    payload: { id: "0", type: TodoListItemType.TODO, title: "Fix bugs" },
  });
  expect(store.state).toStrictEqual([
    { id: "0", type: TodoListItemType.TODO, title: "Fix bugs" },
  ]);

  store.dispatch({
    id: TodoListActionType.ADD,
    payload: { id: "1", type: TodoListItemType.TODO, title: "Read a book" },
  });
  expect(store.state).toStrictEqual([
    { id: "0", type: TodoListItemType.TODO, title: "Fix bugs" },
    { id: "1", type: TodoListItemType.TODO, title: "Read a book" },
  ]);
});

test("Store should be updated after action of update", () => {
  store.dispatch({
    id: TodoListActionType.UPDATE,
    payload: {
      id: "0",
      type: TodoListItemType.TODO,
      title: "Fix lots of bugs",
    },
  });
  expect(store.state).toStrictEqual([
    { id: "0", type: TodoListItemType.TODO, title: "Fix lots of bugs" },
    { id: "1", type: TodoListItemType.TODO, title: "Read a book" },
  ]);

  store.dispatch({
    id: TodoListActionType.UPDATE,
    payload: {
      id: "0",
      type: TodoListItemType.DONE,
      title: "Fix lots of bugs",
    },
  });
  expect(store.state).toStrictEqual([
    { id: "0", type: TodoListItemType.DONE, title: "Fix lots of bugs" },
    { id: "1", type: TodoListItemType.TODO, title: "Read a book" },
  ]);
});

test("Store should remove related todo list item after action of delete", () => {
  store.dispatch({
    id: TodoListActionType.DELETE,
    payload: {
      id: "1",
    },
  });
  expect(store.state).toStrictEqual([
    { id: "0", type: TodoListItemType.DONE, title: "Fix lots of bugs" },
  ]);
});
