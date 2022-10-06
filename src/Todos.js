import React, { useEffect } from 'react';
import useTodoState from './hooks/useTodoState';
import NewTodo from './NewTodo';
import './Todos.css'
import Todo from './Todo';

// Material UI
import Card from '@mui/material/Card';

export default function Todos(props){
    const initialTodos = JSON.parse(localStorage.getItem('localTodos')) || [];
    const {todos, addTodo, deleteTodo, editTodo, toggleTodo} = useTodoState(initialTodos);

    useEffect(() => {
        try {
            localStorage.setItem('localTodos', JSON.stringify(todos));
        } catch (error) {
            console.log(error);
        }
    }, [todos]);

    return (
        <div className='Todos'>
            <NewTodo addTodo={addTodo}/>
            <div className='Todos-card'>
                <Card sx={{minWidth: 500, minHeight: 50}}>
                    {todos.map((todo) => {return <Todo key={todo.todo} todo={todo} toggleTodo={toggleTodo} editTodo={editTodo} deleteTodo={deleteTodo} />})}
                </Card>
            </div>
        </div>
    )
}