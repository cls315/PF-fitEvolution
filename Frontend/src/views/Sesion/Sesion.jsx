import style from "./Sesion.module.css"
import { IoLogoFacebook } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



const FormSesion = () => {


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


    return (
        <div className={style.FormSesion}>

            <div className={style.Form}>
                <div className={style.btconteiner}>
                    <button onClick={volverinicio} className={style.btLogin}>{'< volver'}</button>
                </div>
                <h1>Iniciar sesion</h1>

                <input type="text" value={form.name} name="email" className={style.input} onChange={handlerChange} placeholder="EMAIL" />

                <input type="password" value={form.password} name="password" className={style.input1} onChange={handlerChange} placeholder="PASSWORD" />

                <button className={style.button}>Iniciar Sesion</button>
                <hr />
                <div className={style.faceGoole}>
                    <button className={style.Face}>
                        <IoLogoFacebook size={42} className={style.iconFace} />
                        <p className={style.pfg}>Continuar con Facebook</p>
                    </button>

                    <button className={style.google}>
                        <FcGoogle size={40} className={style.iconFace} />
                        <p className={style.pfg}>Continuar con Google</p>
                    </button>
                </div>

                <p className={style.parr}>¿Olvidaste tu contraseña?<Link>Haz click aqui</Link></p>
                <p>¿No tienes una cuenta?<Link to={'/select'}>Haz click aqui</Link></p>


            </div>





        </div>







    )

}

export default FormSesion;