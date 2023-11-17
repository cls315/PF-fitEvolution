//Components
import Loading from '../../components/loading/loading.component'
//Commons imports
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
//Styles
import style from "./landing.module.css"


function Landing(props) {
  const [loading, setLoading] = useState(false)
  const navigate=useNavigate()
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    // Esta función se ejecutará cuando la ruta cambie (después de la navegación)
    setLoading(false);
    //simulo una demora antes de mostrar los elementos
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 1000);

    return () => clearTimeout(timer);  //desmonto la funcion timer para que no se siga ejecutando
  }, []);

  return (<div className={style.containerForm}>
    {loading ? <Loading></Loading> : null}

    <div className={`${style.Title}${showElements ? ` ${style.show}`: ``}`}>     
      <h1>Proyecto Final</h1>
      <h1>FitRevolution</h1>
      <h2 className={style.subTitleLanding}>Ponganse las pilas que hay que aprobar!!!!</h2>
      <h2 className={style.subTitleLanding}>segundo titulo</h2>
      <button className={style.buttonForm} onClick={() => {
      setLoading(true)
      navigate('/home')
    }}>COMENZAR</button>
    </div>
    
   

  </div>)
}

export default Landing