import style from './css/Projects.module.css'
import { MdOutlineSwipe } from "react-icons/md";

import { Cards } from "../components/cards/Cards"
import arquitetura from '../images/imgs projetos/arquitetura.svg'
import escoladnc from '../images/imgs projetos/escoladnc.svg'
import api from '../images/imgs projetos/api.svg'
import { Button } from '../components/buttons/Button'

export const Projects = () => {



    return (

        <>

            <h1 className={style.titlePage}>
                Projetos Recentes
            </h1>

            <p className={style.slide}><MdOutlineSwipe  size={45}/></p>

        <div className={style.projects} id='projects'>
            
                <div className={style.cards}>
                    <Cards
                            img = {arquitetura}
                            title = {'Empresa de Arquitetura'}
                            tech = {'HTML, CSS e JAVASCRIPT'}
                            link={'https://github.com/WalaceRamosdev/projeto-arquitetura'}
                        />
                </div>

                    <div className={style.cards}>
                        <Cards className={style.cards}
                            img={api}
                            title={'Consumo de API'}
                            tech={'HTML, CSS e JAVASCRIPT'}
                            link={'https://github.com/WalaceRamosdev/consumo-api'}
                        />
                    </div>

                    <div className={style.cards}>
                        <Cards className={style.cards}
                            img={escoladnc}
                            title={'Escola DNC'}
                            tech={'HTML, CSS e JAVASCRIPT'}
                            link={'https://github.com/WalaceRamosdev/landing-page'}
                        />
                    </div>
                
        </div>

        <div className={style.subPage}>
            
            <h2>Veja meus repositórios</h2>
            <a href="https://github.com/WalaceRamosdev?tab=repositories" target='_blank'><Button text={'GitHub'} className={style.btn}/>
            </a>
        </div>

        </>
    )
}
