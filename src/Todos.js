import React, { useState } from 'react';
import NewTodo from './NewTodo';
import './Todos.css'
import Todo from './Todo';

// Material UI
import Card from '@mui/material/Card';

export default function Todos(props){
    const [todos, setTodos] = useState([{
        todo: "Buy Milk",
        isChecked: false
    }])

    const addTodo = (todoToAdd) => {
        setTodos([...todos, todoToAdd]);
    }

    const deleteTodo = (todoToDelete) => {
        setTodos(todos.filter(todo => {return todo !== todoToDelete}));
    }

    const toggleTodo = (todoToEdit) => {
        const foundTodo = todos.find(todo => {return todo.todo === todoToEdit.todo});
        const restOfTodos = todos.filter(todo => {return todo.todo !== foundTodo.todo});
        const finalTodos = [...restOfTodos, {todo: foundTodo.todo, isChecked: !foundTodo.isChecked}];
        setTodos(finalTodos);
    }
    return (
        <div className='Todos'>
            <NewTodo addTodo={addTodo}/>
            <div className='Todos-card'>
                <Card sx={{minWidth: 500, minHeight: 50}}>
                    {todos.map((todo) => {return <Todo key={todo.todo} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />})}
                </Card>
            </div>
        </div>
    )
}