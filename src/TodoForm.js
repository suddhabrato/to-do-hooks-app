import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import useinputState from './hooks/useInputState';
import { TodosContext } from './context/todosContext';

export default function TodoForm() {
    const [value, handleChange, reset] = useinputState('');
    const { dispatch } = useContext(TodosContext);
    return (
        <Paper sx={{ margin: '1rem 0', padding: '0 1rem' }}>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({ type: "ADD", task: value });
                reset();
            }}>
                <TextField variant='standard' value={value} onChange={handleChange} margin='normal' label='Add new To-do' fullWidth />
            </form>
        </Paper>
    )
}