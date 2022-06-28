import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp() {
    const initialTodos = [
        { id: 1, task: 'Go Walking', completed: false },
        { id: 2, task: 'Bath', completed: true },
        { id: 3, task: 'Study', completed: false }
    ]
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (newTodoText) => {
        setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
    }

    const removeTodo = (todoId) => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }

    const toggleTodo = (todoId) => {
        setTodos(todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo));
    }

    const editTodo = (todoId, newTask) => {
        setTodos(todos.map(todo => todo.id === todoId ? { ...todo, task: newTask } : todo));
    }

    return (
        <Paper sx={{
            padding: '0',
            margin: '0',
            height: '100vh',
            backgroundColor: '#fafafa'
        }}
            elevation={0}
        >
            <AppBar color='primary' position='static' sx={{ height: '64px' }}>
                <Toolbar>
                    <Typography color='inherit'>Todos With Hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent='center' sx={{ marginTop: '1rem' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                </Grid>
            </Grid>
        </Paper>
    )
}