import profile2 from '../images/Profile/profile2.svg'
import style from './css/Presentation.module.css'

export const Presentation = () => {
    return (

        <div className={style.presentation}>
            <img src={profile2}/>

            <h2>Walace Ramos</h2>

            <h1>Front-End Developer</h1>

            <p>Com uma longa experiência no desenvolvimento de websites e aplicações web, estou aqui para transformar suas idéias em realidade digital.</p>
        </div>

    )
}