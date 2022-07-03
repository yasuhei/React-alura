import { useState } from 'react';
import './TextField.css'

const TextField = (props) => {


    // let valor = 'yasuhei'

    const aoDigitado = (event) => {        
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={props.placeholder} type="text"/>
        </div>
    )

}

export default TextField 