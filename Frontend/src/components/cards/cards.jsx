import Card from "../card/card"
import styles from "./cards.module.css"

const Cards = ({profes})=>{

    return(
        <div className={styles.cardsconteiner}>
            {profes?.map((profe)=>(<Card profe={profe} />))}
        </div>
    )
}