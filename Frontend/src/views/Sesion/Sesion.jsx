import style from "./Sesion.module.css"
import { IoLogoFacebook } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const FormSesion = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBFyGLc7ayGtqpU6rWQ3-zUK7bnlqc2uts",
        authDomain: "pf-final-henry.firebaseapp.com",
        projectId: "pf-final-henry",
        storageBucket: "pf-final-henry.appspot.com",
        messagingSenderId: "1056250886265",
        appId: "1:1056250886265:web:de0e1b9865821c2a19fca8",
        measurementId: "G-HRF4L9VW4C"
    };
    const auth = getAuth();
    const [form, setForm] = useState({ email: "", password: "" })
    const navigate = useNavigate()




    const handlerChange = (event) => {

        event.preventDefault()

        const { value, name } = event.target

        setForm({
            ...form, [name]: value
        })
    }

    const validate = (form) => {
        if (!form.email)
            return alert("debe ingresar un nombre")

        if (form.email.length > 25) {
            return alert(" el nombre de la actividad no debe superar 25 caracteres")
        }

    }

    const validateEmail = (email) => {
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido = expReg.test(email)
        if (esValido == false)
            alert("email no valido")

    }
    0
    const volverinicio = () => {
        navigate('/')
    }

    const handleSubmit = (e) => {
        if (form.email === "usuario@gmail.com") navigate('/homeusuario')
        if (form.email === "entrenador@gmail.com") navigate('/dashboardtr')
    }

    const call_login_google = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
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


    return (
        <div className={style.FormSesion}>

            <form className={style.Form} onSubmit={handleSubmit}>
                <div className={style.btconteiner}>
                    <button onClick={volverinicio} className={style.btLogin}>{'< volver al inicio'}</button>
                </div>
                <h1>Iniciar sesion</h1>

                <input type="text" value={form.name} name="email" className={style.input} onChange={handlerChange} placeholder="EMAIL" />

                <input type="password" value={form.password} name="password" className={style.input1} onChange={handlerChange} placeholder="PASSWORD" />

                <button type="submit" className={style.button}>Iniciar Sesion</button>
                <hr />
                <div className={style.faceGoole}>
                    <button className={style.Face}>
                        <IoLogoFacebook size={42} className={style.iconFace} />
                        <p className={style.pfg}>Continuar con Facebook</p>
                    </button>

                    <button onCLick={call_login_google} className={style.google}>
                        <FcGoogle size={40} className={style.iconFace} />
                        <p className={style.pfg}>Continuar con Google</p>
                    </button>
                </div>

                <p className={style.parr}>¿Olvidaste tu contraseña?<Link>Haz click aqui</Link></p>
                <p>¿No tienes una cuenta?<Link to={'/select'}>Haz click aqui</Link></p>


            </form>





        </div>







    )

}

export default FormSesion;