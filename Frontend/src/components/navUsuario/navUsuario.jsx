import {Link} from "react-router-dom"
import imageLogo from "../../images/imageLogo.jpg"
import styles from "./navUsuario.module.css"

const NavUsuario = ()=>{
    return(
        <div className={styles.nav}>
            <img src={imageLogo} className={styles.logo}/>
            <Link to="/">
            <button className={styles.btn}>Cerrar sesion</button>
            </Link>
        </div>
    )
}

export default NavUsuario;