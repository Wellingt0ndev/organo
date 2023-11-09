import './Campo.css'

interface CampoProps{
    aoAlterado: (valor: string) => void
    placeholder: string
    valor: string
    label: string
    obrigatorio: boolean
}

const Campo = ({ aoAlterado, label, obrigatorio, placeholder, valor}: CampoProps) => {
    return (<div className={`campo campo-${'color'}`}>
        <label>{label}</label>
        <input 
            value={valor} 
            onChange={evento => aoAlterado(evento.target.value)} 
            required={obrigatorio} 
            placeholder={placeholder}/> 
    </div>)
}

export default Campo