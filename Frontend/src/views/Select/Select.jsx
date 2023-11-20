import { Link, useNavigate } from 'react-router-dom';
import style from './Select.module.css'



const Select =()=>{

const navigate= useNavigate()

    return (
        <div className={style.select}>


            <h2>Elije un rol</h2>
            <div className={style.text}>


            <p>Estudiante </p><p>Entrenador</p>
            

            </div>
           
             <button  className={style.button1} onClick={()=>{navigate("/sesion")}}>Ingresar</button>
             <button  className={style.button2}onClick={()=>{navigate("/sesion")}}>Ingresar</button>

            

        </div>
    )
} 

export default Select;