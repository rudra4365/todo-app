import React from 'react'
import {List, ListItem, ListItemText, ListItemAvatar, Button} from '@material-ui/core/';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';

function Todo(props) {

    return (
        <List className = "todo_list">
            <ListItem>
            <ListItemAvatar></ListItemAvatar>
                <ListItemText secondary = "Deadline: " primary = {props.todo.todo} />
            </ListItem>
            <Button onClick = {event => db.collection('todos').doc(props.todo.id).delete()}><DeleteIcon /></Button>
        </List>
 )
}

export default Todo
