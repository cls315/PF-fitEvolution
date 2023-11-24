//Components

//Commons imports
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
//Styles
import style from "./registerTrainer.module.css";
//import firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../components/firebase/firebase';

const RegisterTrainer=()=> {
 
    const navigate = useNavigate();
    //registro con firebase
    const [user,setUser]=useState({
       
    })

    const handleChange = (e) => {
        const property=e.target.name
        const value=e.target.value
        setUser({...user,[property]:value })
        console.log({...user,[property]:value })
    }
    const handleSubmit =async (e) => {
        e.preventDefault()
        console.log(user.forename)
        console.log(user.password)
        try{
            const userCredentials=await createUserWithEmailAndPassword(auth,user.email,user.password) //esto se envia a firebase y puede llevar tiempo por ello usamos async y await
            console.log(userCredentials)
            if (userCredentials.operationType){
            window.alert("Usuario registrado con exito")
            navigate('/login')} else { throw Error("Error al registrar el usuario")}
            }catch(error){
                //window.alert(error.code)    //error.name "firebase error(tipo de error)", error.code "nombre del error", error.message "descripcion del error"
                if (error.code==="auth/email-already-in-use") window.alert("Email ya esta registrado")
                else if(error.code==="auth/invalid-email") window.alert("Email invalido")
                else if(error.code==="auth/weak-password") window.alert("La contraseña debe tener un minimo de 6 caracteres")
                else if(error.code) window.alert("Algo salio mal")
            }
    }
   
    //------------------------
    const [errors, setErrors] = useState({})
    
  

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
                        <label className={style.label1}> Certificaciones</label>
                        <input placeholder=" Arrastrar aqui(pdf,jpg)" className={style.inputNom} name="certifications" onChange={handleChange} />
                        <p className={style.p1}>{errors.certifications}</p>
                    </div>
                    <div className={style.labelDescription}>
                        <label className={style.label1}> Antecedentes</label>
                        <textarea placeholder=" Agrega una descripcion" type='string' className={style.inputDescription} name="description" onChange={handleChange}/>
                        <p className={style.p1}>{errors.description}</p>
                    </div>
                </form >

            </div>
            <div className={style.titleInf}>
                <button onClick={handleSubmit} className={style.btCreateAccount}>Crear cuenta</button>
            <span >¿Ya tienes cuenta?  <button onClick={volverInicio} className={style.spanButton}> inicio de sesion</button></span>
            </div>
        </div>
    </div>)
}

export default RegisterTrainer