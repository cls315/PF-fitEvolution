//Components
import Loading from '../../components/loading/loading.component'
import SearchBar from '../../components/searchbar/searchbar.component';
//Commons imports
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import iconos from '../../images/iconos.png'
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
    <SearchBar/>
    <div className={style.Title}>    
      <h2 className={style.subTitle1Landing}>Asociate a una de nuestras membresias</h2>
      <h1 className={style.title1Landing}>COMIENZA AHORA GRATIS!</h1>
      <h2 className={style.subTitle1Landing}>Disfruta de todos los beneficios de FitRevolution</h2>
      <img className={style.iconosLanding} src={iconos} alt="iconos"></img>
      <button className={style.buttonConteinerForm} onClick={() => {
      setLoading(true)
      navigate('/home')
    }}>Asociarse</button>
    </div>
    
   

  </div>)
}

export default Landing