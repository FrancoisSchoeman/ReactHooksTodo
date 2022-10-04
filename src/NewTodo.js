import React, { useState } from 'react';
import './NewTodo.css';

// Material UI
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

export default function NewTodo(props) {
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.addTodo({todo: newTodo, isChecked: false})
    }
    return (
        <div className='NewTodo'>
            <Card sx={{ minWidth: 500, minHeight: 50 }}>
                <form onSubmit={handleSubmit}>
                    <TextField sx={{ width: "95%" }} onChange={(evt) => {setNewTodo(evt.target.value)}} value={newTodo} label="Add New Todo" variant="standard" />
                </form>
            </Card>
        </div>
    )
}