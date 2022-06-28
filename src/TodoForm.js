import React from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import useinputState from './hooks/useInputState';

export default function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useinputState('');
    return (
        <Paper sx={{ margin: '1rem 0', padding: '0 1rem' }}>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
                <TextField variant='standard' value={value} onChange={handleChange} margin='normal' label='Add new To-do' fullWidth />
            </form>
        </Paper>
    )
}