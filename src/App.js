import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Faire les courses' },
    { id: 2, title: 'Faire le ménage' },
  ]);

  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState(null);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTask = {
        id: todos.length + 1,
        title: newTodo,
      };
      setTodos([...todos, newTask]);
      setNewTodo('');
    }
  };

  const handleEditTodo = (todo) => {
    setEditTodo(todo);
    setNewTodo(todo.title);
  };

  const handleUpdateTodo = () => {
    if (newTodo.trim() !== '') {
      const updatedTodos = todos.map((todo) =>
        todo.id === editTodo.id ? { ...todo, title: newTodo } : todo
      );
      setTodos(updatedTodos);
      setNewTodo('');
      setEditTodo(null);
    }
  };

  const handleDeleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const handleCancelEdit = () => {
    setNewTodo('');
    setEditTodo(null);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        {editTodo ? (
          <>
            <button onClick={handleUpdateTodo}>Mettre à jour</button>
            <button onClick={handleCancelEdit}>Annuler</button>
          </>
        ) : (
          <button onClick={handleAddTodo}>Ajouter</button>
        )}
      </div>
      <TodoList
        todos={todos}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
