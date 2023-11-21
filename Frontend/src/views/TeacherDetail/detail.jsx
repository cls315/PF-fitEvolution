import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PERFIL from "../../assets/PERFIL.jpg"
import mplogo from "../../images/mplogo.png"
import StarRating from "../../components/starRating/starRating";

import Navdetail from "./navdetail";

import styles from "./detail.module.css"

const Detail = ()=>{

    const {id} = useParams();

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
                    <h2>Nombre: nombre</h2>
                    <h2>Nacionalidad: argentino papa</h2>
                    <h2>E-mail: email</h2>
                    <h2>Enfoque: juerza</h2>
                    <h2>Descripcion: Alto profe</h2>
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
                <img src={PERFIL} className={styles.img}/>
                <StarRating rating={5} className={styles.stars}/>
            </div>
        </div>
            {/* )} */}
        </div>
    )
}

export default Detail;