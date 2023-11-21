import style from "./Dashbar.module.css"
import { MdOutlinePayment } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { MdSportsGymnastics } from "react-icons/md";
import imagelogo from '../../images/imageLogo.jpg';
import iconsearch from '../SVG/iconsearch.svg'
import iconbell from '../SVG/iconbell.svg'
import iconMessage from '../SVG/iconMessage.svg'
import { Link } from "react-router-dom";



const DashBar = () => {
    return (
        <div className={style.dashBar}>
            <div class={style.dropdown}>
                <button className={style.buttonPerfil}>CH&#9660;</button>
                <ul class={style.dropdowncontent}>
                    <li><a href="#">Mi cuenta</a></li>
                    <li><a href="#">Ajustes</a></li>
                    <li><Link to={'/'}>Salir</Link></li>
                </ul>
            </div>
            <img className={style.iconsDashbar} src={iconsearch}></img>
            <img className={style.iconsDashbar} src={iconbell}></img>
            <img className={style.iconsDashbar} src={iconMessage}></img>
            <button className={style.entreno}><CgGym />Entrenamientos</button>
            <button className={style.depor}><MdSportsGymnastics />Deportistas</button>
            <button className={style.pagos}><MdOutlinePayment />Pagos</button>
            <img className={style.logoTraineBar} src={imagelogo} alt="logo" />
        </div>
    )

}


export default DashBar