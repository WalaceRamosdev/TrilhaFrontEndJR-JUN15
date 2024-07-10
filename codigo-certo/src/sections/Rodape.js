import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { BiLogoGmail } from "react-icons/bi";
import style from './css/Rodape.module.css'

export const Rodape = () => {
    return (
        <>
            <h1>Contato</h1>
        <div className={style.rodape}>
            
            <div className={style.contato}>
                <h2><FaWhatsapp /> Tel:</h2>
                <p>(21) 9 9906 4502</p>

                <h2><BiLogoGmail /> Email:</h2>
                <p>contatowalace.dev@gmail.com</p>
            </div>

            <div className={style.icons}>
                <a href='https://www.instagram.com/walacedev.contato/' target='_blank'>
                    <FaInstagram size={50}/>
                </a>
                <a href='https://www.linkedin.com/in/walace-ramos-dev/' target='_blank'>
                    <FaLinkedin size={50}/>
                </a>
                <a href='https://github.com/WalaceRamosdev' target='_blank'>
                    <FaGithub size={50}/>
                </a>
            </div>
    
        </div>
        </>
    )
        
}