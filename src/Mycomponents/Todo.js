import React from 'react'

export const Todo = ({ todoItem, deleteTask }) => {
    return (
        <div>
            <h4>{todoItem.todo}</h4>
            <p>{todoItem.desc}</p>
            <button className="btn btn-sm btn-danger"
                onClick={() => { deleteTask(todoItem.SNo) }}>Delete</button>
        </div>
    )
}
