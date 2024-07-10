import profile2 from '../images/Profile/profile2.svg'
import style from './css/Presentation.module.css'

export const Presentation = () => {
    return (

        <div className={style.presentation} id='presentation'>
            <img src={profile2}/>

            <h3>Walace Ramos</h3>

            <h2>Front-End Developer</h2>

            <p>Com uma longa experiência no desenvolvimento de websites e aplicações web, estou aqui para transformar suas idéias em realidade digital.</p>
        </div>

    )
}