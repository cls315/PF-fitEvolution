import style from "./Sesion.module.css"
import { IoLogoFacebook } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import validate from "./validate.js";
//FIREBASE
import { auth, provider } from "../../components/firebase/firebase";

import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

//--------



const FormSesion = (props) => {


    //FIREBASE
    //Para acceder con una ventana emergente, llamada signInWithPopup,valida si existe el usuario y si no crea uno
    const call_login_google = (e) => {
        e.preventDefault()
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(auth)
                navigate('/dashboardtr')
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    //--------------------------------------------------------------
    //inicio de sesion con email,valida si existe el usuario pero no crea ninguno

    const handleSubmit = async (e) => {
        e.preventDefault()
        //  navigate('/homeusuario')
        //  navigate('/dashboardtr')
        const checkErr = validate(form)
        if (Object.values(form).some(inp => inp==="")) {  //some comprueba si algun elemento del array es "", si hay un "" quiere decir que hay un input vacio
            alert("DEBÉS COMPLETAR TODOS LOS CAMPOS!");
            return;
        }
        
        if (Object.values(checkErr).some(error => error)) {
            alert("LOS CAMPOS TIENEN ERRORES!");
            return;
        }

        try {
            const credentials = await signInWithEmailAndPassword(auth, form.email, form.password)
            window.alert(`Bienvenido: ${credentials.user.email}`)
            navigate('/dashboardtr')
            console.log(credentials.user.email)
        } catch (error) {
            //  window.alert(error.code)
            if (error.code === "auth/invalid-login-credentials" || error.code === "auth/invalid-login-credentials") window.alert("Usuario y/o contraseña invalidos")
        }
    }

    //-------

    const [form, setForm] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()


    const handleChange = (e) => {
        e.preventDefault()
        const property = e.target.name
        const value = e.target.value;

        setForm((previo) => {
            const newS = {
                ...previo,
                [property]: value
            };
            setErrors(validate(newS));
            return newS;
        })
    }


    const volverinicio = () => {
        navigate('/')
    }


    return (
        <div className={style.FormSesion}>

            <form className={style.Form} onSubmit={handleSubmit}>
                <div className={style.btconteiner}>
                    <button onClick={volverinicio} className={style.btLogin}>{'< volver al inicio'}</button>
                </div>
                <h1>Iniciar sesion</h1>

                <div className={style.formSession}>
                    <div className={style.labelform1}>
                        <label className={style.label1}> Correo electronico</label>
                        <input placeholder=" Correo electronico" className={style.inputNom} name="email" onChange={handleChange} />
                        {errors.email && <p className={style.p1}>{errors.email}</p>}
                    </div>
                    <div className={style.labelform1}>
                        <label className={style.label1}> Contraseña</label>
                        <input placeholder="Contraseña" className={style.inputNom} name="password" type="password" onChange={handleChange} />
                        {errors.password && <p className={style.p1}>{errors.password}</p>}
                    </div>
                </div>
                <button type="submit" className={style.button}>Iniciar Sesion</button>
                <hr />
                <div className={style.faceGoole}>
                    <button className={style.Face}>
                        <IoLogoFacebook size={42} className={style.iconFace} />
                        <p className={style.pfg}>Continuar con Facebook</p>
                    </button>

                    <button onClick={call_login_google} className={style.google}>
                        <FcGoogle size={40} className={style.iconFace} />
                        <p className={style.pfg}>Continuar con Google</p>
                    </button>
                </div>
                <p className={style.parr}>¿Olvidaste tu contraseña?<Link> Haz click aqui</Link></p>
                <p>¿No tienes una cuenta?<Link to={'/select'}> Haz click aqui</Link></p>
            </form>






        </div>







    )

}

export default FormSesion;