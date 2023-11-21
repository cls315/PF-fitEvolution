import styles from "../card/card.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"

import StarRating from "../starRating/starRating"
import PERFIL from "../../assets/PERFIL.jpg";

const Card = ({profe}) => {

    const idprueba = 1;

  return (
    <div className={styles.cardconteiner}>
      <img src={PERFIL} className={styles.perfil}/>
      <h2 className={styles.name}>Juancito Peralta</h2>
      <h3 className={styles.enfoque}>Entrenamieno de fuerza</h3>
      <StarRating rating={5}/>
      <Link to={`/teacher/${idprueba}`}>
      <button className={styles.btnselect}>Seleccionar Entrenador</button>
      </Link>
    </div>
  );
};

export default Card;
