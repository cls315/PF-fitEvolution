import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrainers } from "../../components/redux/actions/actions"
import NavUsuario from "../../components/navUsuario/navUsuario";
import Cards from "../../components/cards/cards"
import styles from "./homeusuario.module.css"

const Homeusuario = () => {

    const dispatch = useDispatch()
    const allTrainers = useSelector((state) => state.allTrainers);

    useEffect(()=>{
        dispatch(getTrainers());
    }, [dispatch])
    

  return (
    <div>
      <NavUsuario/>
    <div className={styles.conteiner}>
      <div className={styles.cardsconteiner}>
        <Cards profes={allTrainers}/>
      </div>
    </div>
    </div>
  );
};

export default Homeusuario;
