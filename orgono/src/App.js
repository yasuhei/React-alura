import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState('')
  const aoNovoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores({...colaboradores, colaborador})
  }

  const times = [
    { 
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    { 
      nome: 'Front-end',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    { 
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    { 
      nome: 'DevOps',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    { 
      nome: 'UX e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    { 
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    { 
      nome: 'Inovação e gestão',
      corPrimaria: '#ff8a05',
      corSecundaria: '#ffeedf'
    },
  ];

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)} />

     {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} />)}


    

    </div>
  );
}

export default App;
