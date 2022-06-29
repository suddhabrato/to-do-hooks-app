import React, { useContext } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import useToggle from './hooks/useToggle';
import EditTodoForm from './EditTodoForm';
import { DispatchContext } from './context/todosContext';

export default function Todo({ task, completed, id }) {
    const [isEditing, toggle] = useToggle(false);
    const dispatch = useContext(DispatchContext);
    return (
        <ListItem sx={{ height: '64px' }}>
            {isEditing ?
                <EditTodoForm id={id} task={task} toggleEditForm={toggle} /> :
                <><Checkbox color='error' tabIndex={-1} checked={completed} onClick={() => dispatch({ type: "TOGGLE", id: id })} />
                    <ListItemText sx={{ textDecoration: completed ? 'line-through' : 'none' }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label='Edit' onClick={() => toggle()}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label='Delete' onClick={() => dispatch({ type: "REMOVE", id: id })}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction></>
            }
        </ListItem>
    )
}