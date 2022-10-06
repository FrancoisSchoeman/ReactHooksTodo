import { useState } from "react";

export default function useTodoState(initialTodos){
    const [todos, setTodos] = useState(initialTodos);
    return {
        todos,
        addTodo: (todoToAdd) => {
            const newTodos = [...todos, todoToAdd]
            setTodos(newTodos);
        },
        deleteTodo: (todoToDelete) => {
            const newTodos = todos.filter(todo => {return todo !== todoToDelete});
            setTodos(newTodos);
        },
        editTodo: (oldTodo, newTodo) => {
            const listOfTodos = todos.map((todo) =>  todo.todo === oldTodo.todo ? { ...todo, todo: newTodo } : todo );
            setTodos(listOfTodos);
        },
        toggleTodo: (todoToEdit) => {
            const listOfTodos = todos.map(todo => todo.todo === todoToEdit.todo ? { ...todo, isChecked: !todo.isChecked } : todo );
            setTodos(listOfTodos);
        }
    };
}