import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrainers } from "../../components/redux/actions/actions"
import NavUsuario from "../../components/navUsuario/navUsuario";
import Cards from "../../components/cards/cards"
import styles from "./homeusuario.module.css"

const Homeusuario = () => {

    const dispatch = useDispatch()
    const allTrainers = useSelector((state) => state.allTrainers);
    const filterTrainer = useSelector((state) => state.filterTrainers)

    useEffect(()=>{
        dispatch(getTrainers());
    }, [dispatch])
    
    let profes = [];
    filterTrainer.length === 0 ? profes = allTrainers : profes = filterTrainer

  return (
    <div>
      <NavUsuario/>
    <div className={styles.conteiner}>
      <div className={styles.cardsconteiner}>
        <Cards profes={profes}/>
      </div>
    </div>
    </div>
  );
};

export default Homeusuario;
