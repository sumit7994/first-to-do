import React from 'react'
import { useState } from 'react';

export const Addtodo = ({ addTodo }) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault()
        if (title === "" || desc === "") {
            alert("Fields can't be empty")
        } else {
            addTodo(title, desc)
            setTitle("")
            setDesc("")
        }

    }
    return (
        <div>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="todo" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div >
    )
}
