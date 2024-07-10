import style from './css/Header.module.css'
import { Link } from 'react-scroll'

export const Header = () => {

    return (
        <div className={style.header} id='header'>
            
                <ul>
                    <li>
                        <Link to="/" spy={true} offset={50} duration={500}>
                            Sobre Mim
                        </Link>
                    </li>
                    <li>
                        <Link to="#projects" spy={true} offset={50} duration={500}>
                            Projetos
                        </Link>
                    </li>
                    <li>
                        <Link to="#objetivos" spy={true} offset={50} duration={500}>
                            Objetivos
                        </Link>
                    </li>
                    <li>
                        <Link to="#hobbies" spy={true} offset={50} duration={500}>
                            Hobbies
                        </Link>
                    </li>
                    <li>
                        <Link to="#contact" spy={true} offset={50} duration={500}>
                        Contato
                        </Link>
                    </li>
                </ul>
        </div>
    )
}