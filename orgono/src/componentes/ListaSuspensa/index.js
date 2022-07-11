import './ListaSuspensa.css'

const ListaSuspensa = (props) => {




    return (
        <div className="lista">
            <label>{props.label}</label>
            <select required={props.required} onChange={event => props.aoAlterado(event.target.value)} value={props.value}>
                <option value=''></option>
            {props.itens.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default  ListaSuspensa