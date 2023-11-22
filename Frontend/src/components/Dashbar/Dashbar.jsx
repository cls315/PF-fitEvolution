import style from "./Dashbar.module.css"
import { MdOutlinePayment } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { MdSportsGymnastics } from "react-icons/md";
import imagelogo from '../../images/imageLogo.jpg';
import iconsearch from '../SVG/iconsearch.svg'
import iconbell from '../SVG/iconbell.svg'
import iconMessage from '../SVG/iconMessage.svg'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { cambiarMenuTrainer } from "../redux/actions/actions";
import {getTrainers} from "../redux/actions/actions"


const DashBar = (props) => {

    const {handleMenu}=props

    // const trainer = useSelector((state)=>state.trainers) 
    //    console.log(trainer)
    const dispatch = useDispatch()

    // const [input, setInput] = useState("");
   
    // const handlerInput=(event)=>{

    //     const value = event.target.value
    //     // console.log(value)
    //     setInput(value)

    // }
//     const searchHandler=(event)=>{

//     event.preventDefault
//     dispatch(getTrainers(input))
    
//  }

   //la ruta que traje getTrainers conslogueada me tira undefined (en cuanto se encuentre la ruta se deberia descomentar las funciones y pasarlas por onChange y unSubmit)

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
            <div className={style.input}>
               <input type="text"/>
            </div>
            <img name='search' onClick={(e)=>handleMenu(e)} className={style.iconsDashbar} src={iconsearch} alt='icon'></img>
            <img name='bell'onClick={handleMenu} className={style.iconsDashbar} src={iconbell} alt='icon'></img>
            <img name='message' onClick={handleMenu} className={style.iconsDashbar} src={iconMessage} alt='icon'></img>
            <button name='entrenamientos' onClick={handleMenu} className={style.entreno}><CgGym />Entrenamientos</button>
            <button name='deportes' onClick={handleMenu} className={style.depor}><MdSportsGymnastics />Deportistas</button>
            <button name='pagos'onClick={handleMenu} className={style.pagos}><MdOutlinePayment />Pagos</button>
            <img className={style.logoTraineBar} src={imagelogo} alt="logo" />
        </div>
    )

}


export default DashBar

