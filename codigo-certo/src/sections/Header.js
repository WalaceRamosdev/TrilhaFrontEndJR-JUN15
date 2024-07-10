import style from './css/Header.module.css'
import { Link } from 'react-scroll'

export const Header = () => {

    return (
        <div className={style.header} id='header'>
            
                <ul>
                    <li>
                        <a href="/" >
                            Sobre Mim
                        </a>
                    </li>
                    <li>
                        <a href="#projects" >
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a href="#objetivos" >
                            Objetivos
                        </a>
                    </li>
                    <li>
                        <a href="#hobbies" >
                            Hobbies
                        </a>
                    </li>
                    <li>
                        <a href="#contact" >
                        Contato
                        </a>
                    </li>
                </ul>
        </div>
    )
}