import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TrashTask from './components/TrashTask';

const App = () => {

    const [listaTareas, setListaTareas] = useState([]);

    const nuevaTarea = (tarea) => {
        setListaTareas([...listaTareas, tarea]);
    }

    const borrar = (id) => {
        const listaFiltrada = listaTareas.filter((e, index) => index !== id);
        setListaTareas(listaFiltrada);
    }

    return (
        <div style={{width:'200px', margin:'0px auto'}}>
            <h1>To Do List</h1>
            <TaskForm nuevaTarea={nuevaTarea}/>

            {
                listaTareas.map((e, index) => {
                return <ul key={index}><li>{e}<TrashTask borrar={borrar} id={index}/></li></ul>
                })
            }

        </div>
    )
}

export default App;