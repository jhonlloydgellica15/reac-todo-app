import React from "react";
import { connect } from "react-redux";
import { addText, addTodo, editAddTodo } from "../redux/action/addTodoAction";

const InputField = ({ addText, selected, text, addTodo, editAddTodo }) => {
  const handleChange = (e) => addText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected || selected === 0) editAddTodo({ value: text, selected: selected });
    else addTodo(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3 mt-3">
        <input type="text" name="todo" value={text} className="form-control" placeholder="Enter new todo" aria-label="Enter new todo" onChange={handleChange} />
        <div className="input-group-append">
          <button onClick={handleSubmit} className="btn btn-outline-primary btnSubmit" type="button" id="button-addon2">
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  addText: (value) => dispatch(addText(value)),
  editAddTodo: (obj) => dispatch(editAddTodo(obj)),
});
const mapStateToProps = ({ text, selected }) => ({
  text,
  selected,
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
