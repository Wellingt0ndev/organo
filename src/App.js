import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome:'Iniciador' ,
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome:'Duelista', 
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome:'Controlador', 
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome:'Sentinela',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5'
    }
  ]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdionado = (jogador) =>{
    console.log(jogador)
    setJogadores([...jogadores, jogador]);
  }
  return (
    <div className="App">
      <Banner/>  
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdionado(jogador)} /> 
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria = {time.corPrimaria} 
      corSecundaria = {time.corSecundaria}
      jogadores = {jogadores.filter(jogador => jogador.time === time.nome)}
      />)}
      <Rodape />      
    </div>
  );
}

export default App;
