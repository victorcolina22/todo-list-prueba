import React from 'react';

const TrashTask = (props) => {

    const borrarTarea = () => {
        props.borrar(props.id);
    }

    return (
        <span
            style={{ paddingLeft: '20px' }}
            onClick={borrarTarea}
        >
            Borrar
        </span>
    )
}

export default TrashTask;