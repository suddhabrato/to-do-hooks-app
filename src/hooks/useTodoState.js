import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function useTodoState(initialTodos) {
    const [todos, setTodos] = useState(initialTodos);
    return {
        todos,
        addTodo: newTodoText => setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]),
        removeTodo: todoId => {
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(updatedTodos);
        },
        toggleTodo: todoId => setTodos(todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)),
        editTodo: (todoId, newTask) => setTodos(todos.map(todo => todo.id === todoId ? { ...todo, task: newTask } : todo))
    };
}