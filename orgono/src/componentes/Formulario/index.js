import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa'
import TextField from '../TextField'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e gestão'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
            <TextField label="Nome" placeholder="Digite seu nome"/>
            <TextField label="Cargo" placeholder="Digite seu cargo"/>
            <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa label="Time" itens={times}/>
            <Botao texto="Criar Card" />
            </form>
        </section>
    )
}

export default Formulario