import React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodosProvider } from './context/todosContext';

export default function TodoApp() {
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
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}