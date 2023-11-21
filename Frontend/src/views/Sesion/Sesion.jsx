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

        const { value, name} = event.target
          console.log(form)
        setForm({
            ...form, [name]: value
        })
    }

    const validate = (form) => {
        console.log("form")
        if (!form.email)
            return alert("debe ingresar un email")

        if (form.email.length > 25) {
            return alert(" el nombre de la actividad no debe superar 25 caracteres")
        }

    }

   const handlerButton =(event)=>{

    validate(form)

    event.preventDefault()

    navigate('/dashboardtr')

   }

    
    
    const volverinicio = () => {
        navigate('/')
    }

    const handleSubmit=(e)=>{
        if (form.email==="usuario@gmail.com") navigate('/homeusuario')
        if (form.email==="entrenador@gmail.com") navigate('/dashboardtr')
    }


    return (
        <div className={style.FormSesion}>

            <form className={style.Form} onSubmit={handleSubmit}>
                <div className={style.btconteiner}>
                    <button onClick={volverinicio} className={style.btLogin}>{'< volver al inicio'}</button>
                </div>
                <h1>Iniciar sesion</h1>

                <input type="text" value={form.email} name="email" className={style.input} onChange={handlerChange} placeholder="EMAIL" />
                <div className={style.checkbox}>
                <input type="checkbox"/><p>Recordar email</p>
                </div>
                <input type="password" value={form.password} name="password" className={style.input1} onChange={handlerChange} placeholder="PASSWORD" />

                <button onClick={()=>{navigate('/dashboardtr')}} className={style.button}>Iniciar Sesion</button>
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


            </form>





        </div>







    )

}

export default FormSesion;