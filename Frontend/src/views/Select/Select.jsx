import { Link, useNavigate } from 'react-router-dom';
import style from './Select.module.css'



const Select = () => {

    const navigate = useNavigate()

    return (<div className={style.conteinerSelect}>
        <div className={style.select}>
            <div className={style.text}>
                <h2>Elije un rol</h2>
            </div>
            <div className={style.rolesSelect}>
                <div className={style.selectRol}>
                    <h1>Estudiante </h1>
                    <button className={style.buttonSelect} onClick={() => { navigate("/registeruser") }}>Registrarse</button>
                </div>
                <div className={style.selectRol}>
                    <h1>Entrenador</h1>
                    <button className={style.buttonSelect} onClick={() => { navigate("/registertrainer") }}>Registrarse</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Select;