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

  const inicial = [
    {
      nome: 'Wellington',
      personagem: 'Raze',
      imagem: 'https://github.com/Wellingt0ndev.png',
      time: times[1].nome
    },
    {
      nome: "Fabian",
      personagem: "Omen",
      imagem: "/imagens/fabian.jpeg",
      time: times[2].nome
    },
    {
      nome: "Jojo",
      personagem: "Sova",
      imagem: "/imagens/jojo.jpeg",
      time: times[0].nome
    },
    {
      nome: "Léo",
      personagem: "DeadLock",
      imagem: "/imagens/leo.jpeg",
      time: times[3].nome
    },
    {
      nome: "Felipe",
      personagem: "Reyna",
      imagem: "/imagens/felipe.jpeg",
      time: times[1].nome
    },
    {
      nome: "Maria",
      personagem: "Sage",
      imagem: "/imagens/maria.jpeg",
      time: times[3].nome
    },
    {
      nome: "Cris",
      personagem: "Killjoy",
      imagem: "/imagens/cris.jpeg",
      time: times[3].nome
    }
  ]

  const [jogadores, setJogadores] = useState(inicial)

  function deletarJogador(){
    
  }

  
  return (
    <div className="App">
      <Banner/>  
      <Formulario times={times.map(time => time.nome)} aoCadastrar={jogador => setJogadores([...jogadores, jogador])} /> 
      <section className='times'>
        <h1>Função</h1>
        {times.map((time, indice) => <Time 
          key={indice} 
          time={time} 
          jogadores={jogadores.filter(jogador => jogador.time === time.nome)} 
          aoDeletar={deletarJogador}
          />)
        }        
      </section>
      <Rodape />      
    </div>
  );
}

export default App;
