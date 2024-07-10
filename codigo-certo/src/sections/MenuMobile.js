import { HiOutlineHome } from "react-icons/hi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { TfiTarget } from "react-icons/tfi";
import { GiMusicalNotes } from "react-icons/gi";
import { BsTelephoneInbound } from "react-icons/bs";

import style from './css/MenuMobile.module.css'

export const MenuMobile = () => {
    return (
        <div className={style.menuMobile}>
            <LiaProjectDiagramSolid />
            <TfiTarget />
            <HiOutlineHome />
            <GiMusicalNotes />
            <BsTelephoneInbound />
        </div>
    )
}