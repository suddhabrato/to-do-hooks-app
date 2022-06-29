import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import useinputState from './hooks/useInputState';
import { TodosContext } from './context/todosContext';

export default function EditTodoForm({ id, task, toggleEditForm }) {
    const [value, handleChange, reset] = useinputState(task);
    const { editTodo } = useContext(TodosContext);
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