import './header.modulo.css'
import ignitelogo from '../assets/Ignite simbol.svg'



export function Header (){
    return(
        <header className="header">
        <img src={ignitelogo} alt="logotipo" />
        </header>
    )
}