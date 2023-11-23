import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrainers, filterFocus, filterScore, quitarFiltros } from "../../components/redux/actions/actions"
import {Link} from "react-router-dom"
import imageLogo from "../../images/imageLogo.jpg"
import styles from "./navUsuario.module.css"

const NavUsuario = ()=>{

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTrainers());
    }, [dispatch])

    const trainers = useSelector((state) => state.allTrainers)

    let focus = trainers.map((trainer) => trainer.focusTr)
    focus = focus.filter((item, index) => {
        return focus.indexOf(item) === index;
    })
    let scores = trainers.map((trainer) => trainer.score)
    scores = scores.filter((item, index) => {
        return scores.indexOf(item) === index
    })
    scores = scores.sort((a,b) => (a - b));

    const filterByFocus = (e)=>{
        const option = e.target.value
        if(option === "todos"){
            dispatch(quitarFiltros())
        } else {
            dispatch(filterFocus(option))
        }
    }

    const filterByScore = (e)=>{
        const option = e.target.value
        if(option === "todos"){
            dispatch(quitarFiltros())
        } else {
            dispatch(filterScore(option))
        }
    }


    return(
        <div className={styles.nav}>
            <img src={imageLogo} className={styles.logo}/>
            <div className={styles.ubibtn}>
            <select name="focus" id="focus" defaultValue={"defaultoption"} onChange={(e)=>{filterByFocus(e)}}>
                <option value="defaultoption" disabled>Elije un enfoque</option>
                <option value="todos">Todos los enfoques</option>
                {focus.map((focus, index) => (
                    <option key={index} value={focus}>{focus}</option>
                ))}
            </select>
            <select name="score" id="score" defaultValue={"defaultoption2"} onChange={(e)=>{filterByScore(e)}}>
                <option value="defaultoption2" disabled>Elije el score</option>
                <option value="todos">Todos los scores</option>
                {scores.map((score, index)=> (
                    <option key={index} value={score}>Solo con {score} estrellas</option>
                ))}
            </select>
            <Link to="/">
            <button className={styles.btn}>Cerrar sesion</button>
            </Link>
            </div>
        </div>
    )
}

export default NavUsuario;