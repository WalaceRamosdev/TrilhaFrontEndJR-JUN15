import { HiOutlineHome } from "react-icons/hi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { TfiTarget } from "react-icons/tfi";
import { GiMusicalNotes } from "react-icons/gi";
import { BsTelephoneInbound } from "react-icons/bs";

import style from './css/MenuMobile.module.css'

export const MenuMobile = () => {
    return (
        <div className={style.menuMobile}>
            <a href="#projects">
                <LiaProjectDiagramSolid size={30}/>
            </a>
            <a href="#objetivos">
                <TfiTarget  size={30}/>
            </a>
            <a href="#presentation">
                <HiOutlineHome  size={30}/>
            </a>
            <a href="#hobbies">
                <GiMusicalNotes size={30} />
            </a>
            <a href="">
                <BsTelephoneInbound  size={30}/>
            </a>
        </div>
    )
}