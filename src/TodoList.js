import React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';



export default function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo =>
                    <>
                        <ListItem>
                            <ListItemText>
                                {todo.task}
                            </ListItemText>
                        </ListItem>
                        <Divider />
                    </>
                )}
            </List>
        </Paper>
    )
}