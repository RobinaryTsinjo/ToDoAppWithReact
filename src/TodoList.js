import React from 'react';

const TodoList = ({ todos, onEditTodo, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => onEditTodo(todo)}>Éditer</button>
          <button onClick={() => onDeleteTodo(todo.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
