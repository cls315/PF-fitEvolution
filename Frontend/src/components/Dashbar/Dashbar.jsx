import style from "./Dashbar.module.css"
import { MdOutlinePayment } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { MdSportsGymnastics } from "react-icons/md";



const DashBar=()=>{
   return (
    <div className={style.dashBar}>
        <button className={style.button}>Home</button>
        <button className={style.pagos}><MdOutlinePayment/>Pagos</button>
        <button className={style.entreno}><CgGym/>Entrenamientos</button>
        <button className={style.depor}><MdSportsGymnastics/>Deportistas</button>
       


    </div>
   )

}


export default DashBar