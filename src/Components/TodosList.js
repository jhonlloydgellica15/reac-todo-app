import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodosList = ({ todos }) => {
  return (
    <div className="wrapper">
      {todos.map((todo, key) => (
        <Todo key={key} todo={todo} id={key} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ todos }) => ({
  todos,
});

export default connect(mapStateToProps)(TodosList);
