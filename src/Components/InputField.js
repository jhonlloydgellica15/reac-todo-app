import React from "react";
import { connect } from "react-redux";
import { addText, addTodo, editAddTodo } from "../redux/action/addTodoAction";

class InputField extends React.Component {
  handleChange = (e) => this.props.addText(e.target.value);
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.selected || this.props.selected === 0) this.props.editAddTodo({ value: this.props.text, selected: this.props.selected });
    else this.props.addTodo(this.props.text);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3 mt-3">
          <input type="text" name="todo" value={this.props.text} className="form-control" placeholder="Enter new todo" aria-label="Enter new todo" onChange={this.handleChange} />
          <div className="input-group-append">
            <button onClick={this.handleSubmit} className="btn btn-outline-primary btnSubmit" type="button" id="button-addon2">
              Add Todo
            </button>
          </div>
        </div>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  addText: (value) => dispatch(addText(value)),
  editAddTodo: (obj) => dispatch(editAddTodo(obj)),
});
const mapStateToProps = (state) => ({
  text: state.text,
  selected: state.selected,
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
