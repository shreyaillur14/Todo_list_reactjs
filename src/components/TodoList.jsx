import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, updateTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="card empty-state">
        No tasks yet. Add a task to get started!
      </div>
    );
  }

  return (
    <div className="card">
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;