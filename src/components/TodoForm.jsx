import AddTodo from './AddTodo';

const TodoForm = ({ addTodo }) => {
  return (
    <div className="card">
      <h2>Create New Task</h2>
      <AddTodo addTodo={addTodo} />
    </div>
  );
};

export default TodoForm;