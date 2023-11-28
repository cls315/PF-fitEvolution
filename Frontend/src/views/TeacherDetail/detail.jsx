import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import StarRating from "../../components/starRating/starRating";
import { Link } from "react-router-dom";
import {agregarCarrito} from "../../components/redux/actions/actions"

import Navdetail from "./navdetail";

import styles from "./detail.module.css"

const Detail = ()=>{

    const dispatch = useDispatch()

    const {id} = useParams();


    const allTrainers = useSelector((state) => state.allTrainers)


    const trainer = allTrainers.find((teacher) => teacher.id == id)

    const sumPack = (option)=>{
        dispatch(agregarCarrito(option))
    }

    let [page, setPage] = useState(1);

    const sumPage = ()=>{
        setPage(page + 1)
    }

    const restPage = ()=>{
        setPage(page - 1)
    }

    return(
        <div>
            <Navdetail />
            {/* {!teacher.id ? (
                <div>
                    <p>The teacher is not found</p>
                </div>
            ) : ( */}
        <div className={styles.allconteiner}>
            {page == 1 ? (
            <div className={styles.info}>
                <div className={styles.details}>
                    <h2>Nombre: {trainer.forename} {trainer.surname}</h2>
                    <h2>Nacionalidad: {trainer.nationality}</h2>
                    <h2>E-mail: {trainer.email}</h2>
                    <h2>Enfoque: {trainer.focusTr}</h2>
                    <h2>Descripcion: {trainer.description}</h2>
                </div>
                <button className={styles.btn} onClick={()=>{sumPage()}}>Selecciona tu plan</button>
            </div>
            ) : page == 2 ? (
            <div className={styles.info}>
                <div className={styles.packs}>
                    <div className={styles.pack1}>
                        <h2>PACK 3 DIAS</h2>
                        <h3>$500</h3>
                        <h4>Rutina diseñada en base a 3 dias de entrenamiento y adaptable a tu cuerpo y meta</h4>
                        <h5>Duracion 1 mes</h5>
                        <button className={styles.packbtn} onClick={()=>{sumPack(500)}}>Sumar al carrito</button>
                    </div>
                    <div className={styles.pack2}>
                        <h2>PACK 5 DIAS</h2>
                        <h3>$1000</h3>
                        <h4>Rutina diseñada en base a 5 dias de entrenamiento y adaptable a tu cuerpo y meta</h4>
                        <h5>Duracion 1 mes</h5>
                        <button className={styles.packbtn} onClick={()=>{sumPack(1000)}}>Sumar al carrito</button>
                    </div>
                </div>
                <button className={styles.btn} onClick={()=>{restPage()}}>Volver a detalles</button>
            </div>
            ) : (<div></div>)}
            <div className={styles.perfil}>
                <img src={trainer.image} className={styles.img}/>
                <StarRating rating={trainer.score} className={styles.stars}/>
            </div>
        </div>
            {/* )} */}
        </div>
    )
}

export default Detail;