//Components

//Commons imports
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import validate from './validate'    //Styles
import style from "./registerTrainer.module.css";
import axios from "axios";


function RegisterTrainer() {
    const volverInicio = () => {
        navigate('/login');
    };
    const changeAccount=()=>{
        navigate('/select');
    }
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [form,setForm]= useState({
            forename:"",
            surname:"",
            // password:"",
            // repeatpassword:"",
            image:"",
            email:"",
            phoneN:"",
            nationality:"",
            dateOfBirth:null,
            dni:"",
            gender:"",
            description:""
        })
      console.log(form)
            const handleChange = (e) => {
                const  property = e.target.name
                const  value  = e.target.value;
        
                setForm((previo) => {
                    const nuevoS = {
                         ...previo,
                    [property]: value
                };
                    setErrors(validate(nuevoS));
                    return nuevoS;  
                });
              
            };
        const handleSubmit =  (e) => {
            e.preventDefault();
            const checkErr = validate(form)
            if (Object.values(checkErr).some(error => error)) {
                alert("DEBÉS COMPLETAR TODOS LOS CAMPOS!");
                return;
            }
    alert(`seguro quiere crear el Entrenador ${form.forename} ${""} ${form.surname}?`)
    try {
        
        axios.post("http://localhost:3001/fitevolution/trainers", form)
    } catch (error) {
        console.error("Error al enviar el formulario:", error)
    }
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
                            <input placeholder=" Nombre" className={style.inputNom} name="forename" onChange={handleChange}  />
                            {errors.forename &&<p className={style.p1}>{errors.forename}</p>}
                        </div>
                        <div className={style.labelform1}>
                            <label className={style.label1}> Apellido</label>
                            <input placeholder=" Apellido" className={style.inputNom} name="surname" onChange={handleChange} />
                            {errors.surname &&<p className={style.p1}>{errors.surname}</p>}
                        </div>
                        <div className={style.labelform1}>
                            <label className={style.label1}> Contraseña</label>
                            <input placeholder="Contraseña" className={style.inputNom} name="password" type="password" />
                            {errors.password && <p className={style.p1}>{errors.password}</p>}
                        </div>
                        <div className={style.labelform1}>
                            <label className={style.label1}> Repetir contraseña</label>
                            <input placeholder="Contraseña" className={style.inputNom} name="repeatpassword" type="password"  />
                            {errors.repeatpassword &&<p className={style.p1}>{errors.repeatpassword}</p>}
                        </div>
                        <div className={style.labelCorreo}>
                            <label className={style.label1}> Correo electronico</label>
                            <input placeholder=" Correo electronico" className={style.inputCorreo} name="email" onChange={handleChange} />
                        { errors.email &&<p className={style.p1}>{errors.email}</p>}
                        </div>
                        
                        <div className={style.labelform1}>
                            <label className={style.label1}> Nacionalidad</label>
                            <input  placeholder=" Nacionalidad" className={style.inputNom} name="nationality" onChange={handleChange} />
                            {errors.nationality && <p className={style.p1}>{errors.nationality}</p>}
                        </div>
                        <div className={style.labelform1}>
                            <label className={style.label1}> DNI</label>
                            <input placeholder=" DNI" className={style.inputNom} name="dni" onChange={handleChange} />
                            {errors.dni && <p className={style.p1}>{errors.dni}</p>}
                        </div>
                        
                        <div className={style.labelform1}>
                            <label className={style.label1}> Imagen</label>
                            <input placeholder=" Imagen" className={style.inputNom} name="image" onChange={handleChange} />
                            {errors.image && <p className={style.p1}>{errors.image}</p>}
                        </div>
                        <div className={style.labelform1}>
                            <label className={style.label1}> Genero</label>
                            <select placeholder="Genero" className={style.inputNom} name="gender" onChange={handleChange}>
                            <option value="">Selecciona...</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                            </select>
                        {errors.gender && <p className={style.p1}>{errors.gender}</p>}
                        </div>
                    
                        <div className={style.labelform1}>
                            <label className={style.label1}> Fecha de Nacimiento</label>
                            <input placeholder=" Fecha de Nacimiento" className={style.inputFec} type='date' name="dateOfBirth" onChange={handleChange} />
                            {errors.dateOfBirth && <p className={style.p1}>{errors.dateOfBirth}</p>}
                        </div>
                        <div className={style.labelform1}>
                            <label className={style.label1}> Telefono</label>
                            <input  placeholder="N de telefono sin 0 ni 15" className={style.inputNom} name="phoneN" onChange={handleChange} />
                            {errors.phoneN && <p className={style.p1}>{errors.phoneN}</p>}
                        </div>
                        <div className={style.labelDescription}>
                            <label className={style.label1}> Descripcion</label>
                            <textarea placeholder=" Agrega una descripcion" type='string' className={style.inputDescription} name="description" onChange={handleChange}/>
                            {errors.description && <p className={style.p1}>{errors.description}</p>}
                        </div>
                    </form >

                <div className={style.titleInf}>
                    <button className={style.btCreateAccount} onClick={handleSubmit}>Crear cuenta</button>
                <span >¿Ya tienes cuenta?  <button onClick={volverInicio} className={style.spanButton}> inicio de sesion</button></span>
                </div>
                </div>
            </div>
        </div>)
    }

    export default RegisterTrainer