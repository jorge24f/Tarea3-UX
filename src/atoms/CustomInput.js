import react, { useState, useEffect } from 'react';

const CustomInput = () => {
    const [valor, modificarValor] = useState("");
    const [lista, modificarLista] = useState([]);
    const [seleccionados, setSeleccionados] = useState([]);

    const actualizar = (event) => {
        let nuevoValor = event.target.value;
        modificarValor(nuevoValor);
    }

    const agregar = () => {
        modificarLista([...lista, valor]);
    }

    const mostrarElementos = () => {
        if(lista.length==0){
            return <text>La lista esta vacia!</text>
        } else{
            return lista.map((item, index) => (
                <div key={index}>
                  <input type='checkbox'
                  checked={seleccionados[index]}
                  onChange={() => toggleSeleccionado(index)}></input>
                  <label>{item}</label>
                </div>))
        }
    }

    const toggleSeleccionado = (index) => {
        const nuevosSeleccionados = [...seleccionados];
        nuevosSeleccionados[index] = !nuevosSeleccionados[index];
        setSeleccionados(nuevosSeleccionados);
    }

    const deleteAll = () => {
        modificarLista([]);
    };

    const deleteSelected = () => {
        const nuevasTareas = lista.filter((item, index) => !seleccionados[index]);
        modificarLista(nuevasTareas);
        setSeleccionados(new Array(nuevasTareas.length).fill(false));
    }

    return (
        <>
            <input type="text" placeholder='Tarea' onChange={actualizar}/>
            <button onClick={agregar}>Crear nuevo</button>
            {mostrarElementos()}
            <button onClick={deleteAll}>Eliminar todo</button>
            <button onClick={deleteSelected}>Eliminar completados</button>
        </>
    );
}

export default CustomInput;