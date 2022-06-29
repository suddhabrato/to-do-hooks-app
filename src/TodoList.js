import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Todo from './Todo';
import { TodosContext } from './context/todosContext';

export default function TodoList() {
    const todos = useContext(TodosContext);
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) =>
                        <React.Fragment key={i}>
                            <Todo {...todo}
                                key={todo.id}
                            />
                            {i < todos.length - 1 && <Divider key={`Divider-${todo.id}`} />}
                        </React.Fragment>
                    )}
                </List>
            </Paper>
        )
    return null;
}