import style from '../cards/css/Cards.module.css'
import { Button } from '../buttons/Button'

export const Cards = ({title, img, tech, link}) => {
    return (
        <div className={style.cards}>

            <h2>{title}</h2>
                <img src={img}/>
                <h3>Tecnologias utilizadas: {tech}</h3>
                <Button text='Saiba mais' link={link} className={style.btn}/>
            
        </div>
    )
}


/*
        
*/
        