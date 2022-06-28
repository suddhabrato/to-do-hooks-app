import React from 'react';
import TextField from '@mui/material/TextField';
import useinputState from './hooks/useInputState';

export default function EditTodoForm({ id, editTodo, task, toggleEditForm }) {
    const [value, handleChange, reset] = useinputState(task);
    return (
        <form style={{ marginLeft: '1rem', width: '50%' }}
            onSubmit={(evt) => {
                evt.preventDefault();
                editTodo(id, value);
                reset();
                toggleEditForm();
            }}>
            <TextField margin='normal' variant='standard' fullWidth value={value} onChange={handleChange} autoFocus />
        </form>
    )
}