import React from 'react'
import {List, ListItem, ListItemText, ListItemAvatar} from '@material-ui/core/';

function Todo(props) {
    return (
        <List className = "todo_list">
            <ListItem>
            <ListItemAvatar></ListItemAvatar>
                <ListItemText secondary = "Deadline: " primary = {props.text} />
            </ListItem>
        </List>
 )
}

export default Todo
