import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ProgressBar from './components/ProgressBar';
import './index.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newTitle) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <ProgressBar todos={todos} />
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo} 
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;