import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import mplogo from "../../images/mplogo.png"
import StarRating from "../../components/starRating/starRating";

import Navdetail from "./navdetail";

import styles from "./detail.module.css"

const Detail = ()=>{

    const {id} = useParams();

    console.log(id);

    const allTrainers = useSelector((state) => state.allTrainers)

    console.log(allTrainers);

    const trainer = allTrainers.find((teacher) => teacher.id == id)

    console.log(trainer);


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
                        <button className={styles.packbtn} onClick={()=>{sumPage()}}>Elegin plan</button>
                    </div>
                    <div className={styles.pack2}>
                        <h2>PACK 5 DIAS</h2>
                        <h3>$1000</h3>
                        <h4>Rutina diseñada en base a 5 dias de entrenamiento y adaptable a tu cuerpo y meta</h4>
                        <h5>Duracion 1 mes</h5>
                        <button className={styles.packbtn} onClick={()=>{sumPage()}}>Elegin plan</button> 
                    </div>
                </div>
                <button className={styles.btn} onClick={()=>{restPage()}}>Volver a detalles</button>
            </div>
            ) : page == 3 ? (
             <div className={styles.info}>
                <div className={styles.pagos}>
                    <div className={styles.pagosizq}>
                        <input placeholder="Numero de la tarjeta"/>
                        <input placeholder="Nombre del titular"/>
                        <p>O</p>
                        <img src={mplogo} className={styles.mplogo}/>
                    </div>
                    <div className={styles.pagosder}>
                        <input placeholder="Expiracion"/>
                        <input placeholder="CCV"/>
                        <button className={styles.pagarbtn}>Pagar</button>
                    </div>
                </div>
                <button className={styles.btn} onClick={()=>{restPage()}}>Volver a planes</button>
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