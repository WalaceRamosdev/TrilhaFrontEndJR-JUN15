import style from './css/Header.module.css'

export const Header = () => {

    return (
        <div className={style.header}>
            
                <ul>
                    <li>
                        <a>
                            Sobre Mim
                        </a>
                    </li>
                    <li>
                        <a>
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a>
                            Objetivos
                        </a>
                    </li>
                    <li>
                        <a>
                            Hobbies
                        </a>
                    </li>
                    <li>
                        <a>
                            Contato
                        </a>
                    </li>
                </ul>
        </div>
    )
}