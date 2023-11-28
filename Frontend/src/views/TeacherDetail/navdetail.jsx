import { Link } from "react-router-dom"

import imageLogo from "../../images/imageLogo.jpg"
import styles from "./navdetail.module.css"

const Navdetail = ()=>{
    return(
        <div className={styles.nav}>
            <img src={imageLogo} className={styles.logo}/>
            <Link to="/homeusuario">
            <button className={styles.btn}>Volver a seleccionar</button>
            </Link>
        </div>
    )
}

export default Navdetail;