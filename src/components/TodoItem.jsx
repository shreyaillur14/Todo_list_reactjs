import { useState } from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    if (!editedTitle.trim()) return;
    updateTodo(todo.id, editedTitle);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleUpdate();
    }
  };

  return (
    <li className="todo-item">
      <div className="todo-item-left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleUpdate}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span 
            className={`todo-item-text ${todo.completed ? 'completed' : ''}`}
            onDoubleClick={handleEdit}
          >
            {todo.title}
          </span>
        )}
      </div>
      
      <div className="todo-actions">
        {!isEditing && (
          <button 
            onClick={handleEdit}
            className="edit-btn"
          >
            Edit
          </button>
        )}
        <button 
          onClick={() => deleteTodo(todo.id)}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;