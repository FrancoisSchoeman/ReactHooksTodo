import React, { useState } from 'react';
import './Todo.css'

// Material UI
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { TextField } from '@mui/material';


export default function Todo(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodoValue, setCurrentTodoValue] = useState(props.todo.todo);

    const editTodo = () => {
        props.editTodo(props.todo, currentTodoValue);
    }
    return (
        <div className='Todo'>
            {isEditing ? <form onSubmit={editTodo}><TextField sx={{ width: "95%" }} onChange={(evt) => {setCurrentTodoValue(evt.target.value)}} value={currentTodoValue} variant="standard" /></form> : 
            <div className='Todo-main'>
            <div className='Todo-left'>
                <Checkbox onClick={() => { props.toggleTodo(props.todo) }} checked={props.todo.isChecked} />
                <span style={{ textDecoration: props.todo.isChecked ? "line-through" : "none" }}>{props.todo.todo}</span>
            </div>
            <div className='Todo-right'>
                <EditIcon onClick={() => {setIsEditing(true)}} />
                <DeleteRoundedIcon onClick={() => { props.deleteTodo(props.todo) }} />
            </div>
        </div>
        }
        </div>
    )
}