import styles from "../card/card.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import StarRating from "../starRating/starRating"
import PERFIL from "../../assets/PERFIL.jpg";

const Card = ({profe}) => {

    

  return (
    <div className={styles.cardconteiner}>
      <img src={PERFIL} className={styles.perfil}/>
      <h2 className={styles.name}>Juancito Peralta</h2>
      <h3 className={styles.enfoque}>Entrenamieno de fuerza</h3>
      <StarRating rating={2}/>
      <button className={styles.btnselect}>Seleccionar Entrenador</button>
    </div>
  );
};

export default Card;
