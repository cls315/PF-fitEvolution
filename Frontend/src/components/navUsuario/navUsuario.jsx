import imageLogo from "../../images/imageLogo.jpg"
import styles from "./navUsuario.module.css"

const NavUsuario = ()=>{
    return(
        <div className={styles.nav}>
            <img src={imageLogo} className={styles.logo}/>
        </div>
    )
}

export default NavUsuario;