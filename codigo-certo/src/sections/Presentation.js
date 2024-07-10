import profile2 from '../images/Profile/profile2.svg'
import style from './css/Presentation.module.css'
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiHtml5, SiCss3 } from "react-icons/si";

export const Presentation = () => {
    return (

        <div className={style.presentation} id='presentation'>
            <img src={profile2}/>

            <div className={style.icones}>
                
                <SiHtml5 size={30} className={style.primeiro}/>
                <SiJavascript size={30} className={style.segundo}/>
                <FaReact size={60} className={style.terceiro}/>
                <SiTypescript size={30} className={style.quarto}/>
                <SiCss3 size={30} className={style.quinto}/>

            </div>

            <h3>Walace Ramos</h3>

            <h2>Front-End Developer</h2>

            <p>Com uma longa experiência no desenvolvimento de websites e aplicações web, estou aqui para transformar suas idéias em realidade digital.</p>
        </div>

    )
}