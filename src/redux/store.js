import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { addTodo } from "./reducer/addTodoReducer";

export const store = createStore(addTodo, applyMiddleware(logger));
