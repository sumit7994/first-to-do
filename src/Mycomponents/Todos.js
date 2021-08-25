import React from 'react'
import { Todo } from './Todo'

export const Todos = ({ todos, deleteTask }) => {

    return (
        <div>
            <h1 className="text-center">Todos List</h1>
            {todos.map(
                (todoItem) => {
                    return (<Todo key={todoItem.SNo} todoItem={todoItem} deleteTask={deleteTask} />)
                })}
        </div>
    )
}
