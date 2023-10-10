import './Jogador.css'

const Jogador = ({ jogador, corDeFundo, aoDeletar }) => {
    return (<div className="jogador">
        <div className='deletar' onClick={aoDeletar}>Deletar</div>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={jogador.imagem} alt={jogador.nome} />
        </div>
        <div className="rodape">
            <h4>{jogador.nome}</h4>
            <h5>{jogador.personagem}</h5>
        </div>
    </div>)
}

export default Jogador