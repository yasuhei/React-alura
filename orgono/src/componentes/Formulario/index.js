import { useState } from 'react'
import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa'
import TextField from '../TextField'
import './Formulario.css'

const Formulario = (props) => {

    // const times = [times, setTimes] = useState('')
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }


    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
            <TextField
             required={true}
             label="Nome"
              placeholder="Digite seu nome" 
              valor={nome} 
              aoAlterado={valor => setNome(valor)}/>

            <TextField required={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
            <TextField required={true} label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
            <ListaSuspensa required={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
            <Botao>
            Criar Card
                
                </Botao>
            </form>
        </section>
    )
}

export default Formulario