import React, {useState, useEffect} from "react";
import {ToDoForm} from "../components/ToDoForm";
import {ToDoList} from "../components/ToDoList";
import {ITodo} from "../interfaces";


export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    })

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        // setTodos([newTodo, ...todos])
        setTodos(prevState => [newTodo, ...prevState])
    }

    const toggleHandler = (id: number) => {
        setTodos(prevState => prevState.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const removeHandler = (id: number) => {
        const shouldRemove = window.confirm('Are you sure you want to delete the entry?')
        if (shouldRemove) {
            setTodos(prevState => prevState.filter(todo => todo.id !== id))
        }

    }

    return (
        <>
            <ToDoForm onAdd={addHandler}/>
            <ToDoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
        </>
    )
}