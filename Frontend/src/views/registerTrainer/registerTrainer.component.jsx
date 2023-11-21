//Components

//Commons imports
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
//Styles
import style from "./registerTrainer.module.css";



function RegisterTrainer() {
    const navigate = useNavigate();
    const handleChange = (e) => {
    }
    
    const [errors, setErrors] = useState({})
    
    const handleSubmit = (e) => {}

    const volverInicio = () => {
        navigate('/login');
     };
    const changeAccount=()=>{
        navigate('/select');
    }

    return (<div className={style.conteinerRegister}>
        <div className={style.menuregister}>
            <div className={style.titleSup}>
                <button onClick={changeAccount} className={style.btregister}>{'< Cambiar tipo de cuenta'}</button>
                <h1 className={style.titleregister}>Crea una cuenta de entrenador</h1>
            </div>
            <div className={style.inputsRegister}>
                <form className={style.RegForms} onSubmit={handleSubmit}>
                    <div className={style.labelform1}>
                        <label className={style.label1}> Nombre</label>
                        <input placeholder=" Nombre" className={style.inputNom} name="forename" onChange={handleChange} />
                        <p className={style.p1}>{errors.forename}</p>
                    </div>
                    <div className={style.labelform1}>
                        <label className={style.label1}> Apellido</label>
                        <input placeholder=" Apellido" className={style.inputNom} name="surname" onChange={handleChange} />
                        <p className={style.p1}>{errors.surname}</p>
                    </div>
                    <div className={style.labelform1}>
                        <label className={style.label1}> Contraseña</label>
                        <input placeholder=" Contraseña" className={style.inputNom} name="password" onChange={handleChange} />
                        <p className={style.p1}>{errors.password}</p>
                    </div>
                    <div className={style.labelform1}>
                        <label className={style.label1}> Repetir contraseña</label>
                        <input placeholder=" Contraseña" className={style.inputNom} name="repeatpassword" onChange={handleChange} />
                        <p className={style.p1}>{errors.repeatpassword}</p>
                    </div>
                    <div className={style.labelCorreo}>
                        <label className={style.label1}> Correo electronico</label>
                        <input placeholder=" Correo electronico" className={style.inputCorreo} name="email" onChange={handleChange} />
                        <p className={style.p1}>{errors.email}</p>
                    </div>
                    <div className={style.labelform1}>
                        <label className={style.label1}> Nacionalidad</label>
                        <input placeholder=" Nacionalidad" className={style.inputNom} name="nacionalidad" onChange={handleChange} />
                        <p className={style.p1}>{errors.repeatpassword}</p>
                    </div>
                    <div className={style.labelform1}>
                        <label className={style.label1}> DNI</label>
                        <input placeholder=" DNI" className={style.inputNom} name="dni" onChange={handleChange} />
                        <p className={style.p1}>{errors.repeatpassword}</p>
                    </div>
                    
                    <div className={style.labelform1}>
                        <label className={style.label1}> Imagen</label>
                        <input placeholder=" Imagen" className={style.inputNom} name="image" onChange={handleChange} />
                        <p className={style.p1}>{errors.image}</p>
                    </div>
                    <div className={style.labelform1}>
                        <label className={style.label1}> Genero</label>
                        <input placeholder=" Genero" className={style.inputNom} name="genero" onChange={handleChange} />
                        <p className={style.p1}>{errors.genero}</p>
                    </div>
                   
                    <div className={style.labelform1}>
                        <label className={style.label1}> Fecha de Nacimiento</label>
                        <input placeholder=" Fecha de Nacimiento" className={style.inputNom} name="dateofbird" onChange={handleChange} />
                        <p className={style.p1}>{errors.dateofbird}</p>
                    </div>
                    <div className={style.labelDescription}>
                        <label className={style.label1}> Descripcion</label>
                        <textarea placeholder=" Agrega una descripcion" type='string' className={style.inputDescription} name="description" onChange={handleChange}/>
                        <p className={style.p1}>{errors.description}</p>
                    </div>
                </form >

            </div>
            <div className={style.titleInf}>
                <button className={style.btCreateAccount}>Crear cuenta</button>
            <span >¿Ya tienes cuenta?  <button onClick={volverInicio} className={style.spanButton}> inicio de sesion</button></span>
            </div>
        </div>
    </div>)
}

export default RegisterTrainer