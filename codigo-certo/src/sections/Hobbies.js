import style from './css/Hobbies.module.css'
import music from '../images/Profile/music.svg'

export const Hobbies = () => {
    return (
        <div className={style.hobbies}>

            <p  id='hobbies'>
                Além de escrever códigos, também tenho uma grande paixão por música.<br/> Este com certeza foi meu primeiro contato com um mundo no qual poucas pessoas se interessevam.<br/>
                Com 12 anos iniciei meus estudos musicais e escolhi o teclado como instrumento, e foi amor a primeira vista, com o tempo estudei por conta própria instrumentos de cordas, tais como violão e contra-baixo, estes instrumentos aprendi apenas com a curiosidade e algumas páginas rasgadas de um livro de música do meu tio. 
                <img src={music}/>
            </p>

            <h1 id='hobbies-mobile'>
                Hobbies &#127929;
            </h1>
            
        </div>
    )
}