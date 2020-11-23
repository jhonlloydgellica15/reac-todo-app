import { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import InputField from "./Components/InputField";
import TodosList from "./Components/TodosList";
import { deleteAll, persistTodo } from "./redux/action/addTodoAction";

const App = ({ deleteAll, persistTodo }) => {
  useEffect(() => {
    persistTodo();
  }, [persistTodo]);
  return (
    <main className="container">
      <div className="card text-center">
        <div className="card-header">Todo List</div>
        <div className="card-body">
          <InputField />
          <TodosList />
        </div>
        <button onClick={deleteAll} className="btn btn-danger " type="button" id="button-addon2">
          Delete all tasks
        </button>
      </div>
    </main>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(deleteAll),
  persistTodo: () => dispatch(persistTodo()),
});
export default connect(null, mapDispatchToProps)(App);
