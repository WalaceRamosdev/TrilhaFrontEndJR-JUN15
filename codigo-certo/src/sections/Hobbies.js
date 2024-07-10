import style from './css/Hobbies.module.css'
import music from '../images/Profile/music.svg'

export const Hobbies = () => {
    return (
        <div className={style.hobbies} id='hobbies'>

            <p>
                Além de escrever códigos, também tenho uma grande paixão por música.<br/> Este com certeza foi meu primeiro contato com um mundo no qual poucas pessoas se interessevam.<br/>
                Com 12 anos começei meus estudos musicais e escolhi o teclado como instrumento, e foi amor a primeira vista, do meu início até hoje, estudei por conta própria instrumentos de cordas, tais como violão e contra-baixo, estes instrumentos aprendi apenas com a curiosidade e algumas páginas rasgadas de um livro de música do meu tio. 
                <img src={music}/>
            </p>

            <h1>
                Hobbies &#127929;
            </h1>
            
        </div>
    )
}