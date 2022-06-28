import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';


export default function Todo({ task, completed, removeTodo, id, toggleTodo }) {
    return (
        <ListItem>
            <Checkbox color='error' tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
            <ListItemText sx={{ textDecoration: completed ? 'line-through' : 'none' }}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Edit'>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}