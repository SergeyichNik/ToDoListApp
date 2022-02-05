import React from "react";
import {ITodo} from "../interfaces";

type ToDoListProps = {
    todos: ITodo[],
    onToggle(id: number): void,
    onRemove: (id: number) => void
}

export const ToDoList: React.FC<ToDoListProps> = ({todos, onRemove, onToggle}) => {
    if (todos.length === 0) {
        return (
            <p>There are no cases now</p>
        )
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()

        onRemove(id)
    }
    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }
                return (
                    <li
                        key={todo.id}
                        className={classes.join(' ')}>
                        <label>
                            <input
                                type={"checkbox"}
                                checked={todo.completed}
                                onChange={onToggle.bind(null, todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i
                                className={"material-icons red-text"}
                                onClick={event => removeHandler(event, todo.id)}
                            >delete</i>
                        </label>
                    </li>
                )
            })}

        </ul>
    )
}