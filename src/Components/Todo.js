import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../redux/action/addTodoAction";

const Todo = ({ todo, id, deleteTodo, editTodo, selected, text }) => {
  return (
    <ul onClick={() => editTodo(id)} className="list-group mt-1">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {selected === id ? text : todo}
        <button onClick={() => deleteTodo(id)} className="btn btn-danger btn-sm">
          Complete
        </button>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (key) => dispatch(deleteTodo(key)),
  editTodo: (key) => dispatch(editTodo(key)),
});
const mapStateToProps = (state) => ({
  text: state.text,
  selected: state.selected,
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
