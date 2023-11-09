import { ReactElement } from "react";
import "./Botao.css";


interface BotaoProps {
  children: ReactElement;
}

const Botao = (texto: BotaoProps) => {
  return <button className="botao">{texto.children}</button>;
};

export default Botao;
