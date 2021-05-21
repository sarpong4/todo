import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { List } from '@material-ui/core';
import React from 'react';
import './Todo.css';

function Todos(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemText primary={props.text} secondary="Deadline!!!" />
            </ListItem>
      </List>
    );
}

export default Todos
