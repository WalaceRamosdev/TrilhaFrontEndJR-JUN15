import { HiOutlineHome } from "react-icons/hi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { TfiTarget } from "react-icons/tfi";
import { PiPianoKeysFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";

import style from './css/MenuMobile.module.css'

export const MenuMobile = () => {
    return (
        <div className={style.menuMobile}>
            
            <a href="#objetivos">
                <TfiTarget  size={30}/>
            </a>

            <a href="#projects">
                <LiaProjectDiagramSolid size={30}/>
            </a>

            <a href="#presentation">
                <HiOutlineHome  size={30}/>
            </a>
            <a href="#hobbies">
                <PiPianoKeysFill size={30} />
            </a>
            <a href='https://www.instagram.com/walacedev.contato/' target="_blank">
                <FaInstagram   size={30}/>
            </a>
        </div>
    )
}