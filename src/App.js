import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState ([
    {
      id: uuidv4(),
      nome:'Iniciador' ,      
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome:'Duelista',       
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      nome:'Controlador',       
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome:'Sentinela',      
      cor: '#FAE5F5'
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false, 
      nome: 'Wellington',
      personagem: 'Raze',
      imagem: 'https://github.com/Wellingt0ndev.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false, 
      nome: "Fabian",
      personagem: "Omen",
      imagem: "/imagens/fabian.jpeg",
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false, 
      nome: "Jojo",
      personagem: "Sova",
      imagem: "/imagens/jojo.jpeg",
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false, 
      nome: "Léo",
      personagem: "DeadLock",
      imagem: "/imagens/leo.jpeg",
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false, 
      nome: "Felipe",
      personagem: "Reyna",
      imagem: "/imagens/felipe.jpeg",
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false, 
      nome: "Maria",
      personagem: "Sage",
      imagem: "/imagens/maria.jpeg",
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false, 
      nome: "Cris",
      personagem: "Killjoy",
      imagem: "/imagens/cris.jpeg",
      time: times[3].nome
    }
  ]

  const [jogadores, setJogadores] = useState(inicial)

  function deletarJogador(id){
    setJogadores(jogadores.filter(jogadores => jogadores.id !== id));
        
  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor;
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4()}])

  }

  function resolverFavorito(id){
    setJogadores(jogadores.map(jogador => {
      if(jogador.id === id) jogador.favorito = !jogador.favorito;
      return jogador;
    }))
  }

  
  return (
    <div className="App">
      <Banner enderecoImagem='imagens/banner-valorant.png' textoAlternativo='O banner principal da página organo'/>  
      <Formulario 
        cadastrarTime = { cadastrarTime}
        times={times.map(time => time.nome)}  
        aoCadastrar={jogador => setJogadores([...jogadores, jogador])} /> 
      <section className='times'>
        <h1>Função</h1>
        {times.map((time, indice) => 
          <Time 
            aoFavoritar={resolverFavorito}
            mudarCor = {mudarCorDoTime}
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
