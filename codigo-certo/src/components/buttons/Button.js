import style from '../buttons/css/Button.module.css'

export const Button = ({text, link}) => {
    return (
        <div>

            <a href={link} target='_blank'>
                <button className={style.btn}>
                    {text}
                </button>
            </a>
        </div>
    )
}