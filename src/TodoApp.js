import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';


export default function TodoApp() {
    const initialTodos = [
        { id: 1, task: 'Go Walking', completed: false },
        { id: 2, task: 'Bath', completed: true },
        { id: 3, task: 'Study', completed: false }
    ]
    const [todos, setTodos] = useState(initialTodos);
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
            <TodoList todos={todos} />
        </Paper>
    )
}