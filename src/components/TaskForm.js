import React, { useState } from 'react';

const TaskForm = (props) => {

    const [inputText, setInputText] = useState('');

    const input = (e) => {
        setInputText(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        props.nuevaTarea(inputText);
        setInputText('');
    }

    return (
        <div style={{ width: '300px' }}>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Agrega nueva tarea"
                    onChange={input}
                    value={inputText}
                />
                <button type="submit">Añadir</button>
            </form>
        </div>
    )
}

export default TaskForm;