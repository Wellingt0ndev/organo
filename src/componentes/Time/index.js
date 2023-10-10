import Jogador from '../Jogador';
import './Time.css'

const Time = ({ time, jogadores, aoDeletar }) => {
    return (

        jogadores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
            <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
            <div className='jogadores'>
                {jogadores.map((jogador, indice) => <Jogador key={indice} jogador={jogador} corDeFundo={time.corSecundaria} aoDeletar={aoDeletar} />)}
            </div>
        </section>

    )
}

export default Time;