import './TextField.css'

const TextField = (props) => {

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} type="text"/>
        </div>
    )

}

export default TextField 