const initState = {
  todos: [],
  text: "",
  selected: undefined,
};
const setPersist = (todos) => window.localStorage.setItem("localData", JSON.stringify(todos));

export const addTodo = (state = initState, action) => {
  switch (action.type) {
    case "PERSIST_TODO":
      const todos = JSON.parse(window.localStorage.getItem("localData"));
      return { ...state, todos: todos ? todos : [] };
    case "ADD_TEXT":
      return { ...state, text: action.payload };
    case "ADD_TODO":
      const localData = state.todos.concat(action.payload);
      window.localStorage.setItem("localData", JSON.stringify(localData));
      return { ...state, todos: localData, text: "" };
    case "DELETE_TODO":
      const localDataDelete = state.todos.filter((todo, key) => key !== action.payload);
      setPersist(localDataDelete);
      return {
        ...state,
        todos: localDataDelete,
      };
    case "EDIT_TODO":
      return { ...state, text: state.todos[action.payload], selected: action.payload };
    case "EDIT_ADD_TODO":
      const localaDataEdit = state.todos.map((todo, key) => (key !== action.payload.selected ? todo : action.payload.value));
      setPersist(localaDataEdit);
      return {
        ...state,
        todos: localaDataEdit,
        selected: undefined,
        text: "",
      };
    case "DELETE_ALL":
      setPersist([]);
      return { ...state, todos: [], text: "" };
    default:
      return state;
  }
};
