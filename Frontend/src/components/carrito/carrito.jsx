import carritoimg from "../SVG/carrito.svg";
import styles from "./carrito.module.css";
import { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import { clearCart } from "../redux/actions/actions";

const Carrito = () => {
    
    const dispatch = useDispatch()

  const [show, setShow] = useState(false);

  const carrito = useSelector((state) => state.carrito)

  let total = 0;

  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i];
  }

  const seteo = () => {
    setShow(!show);
  };

  const vaciarCarrito = ()=>{
    dispatch(clearCart())
  }

  return (
    <div
      className={styles.carritoConteiner}
      onClick={() => {
        seteo();
      }}
    >
      <img src={carritoimg} className={styles.carrito} />
      <span className={styles.count}>{carrito.length}</span>
      {show ? 
      <div className={styles.menu}>
        {carrito.length > 0 ?
        <div>
            {carrito.map((pack) => (
            <div className={styles.packinfo}>
            <h2>Tipo de rutina</h2>
            <h3>Dias</h3>
            <h4>${pack}</h4>
            <h4>X</h4>
        </div>
            ))}
            <div className={styles.total}>
            <h5>Total</h5>
            <h6>${total}</h6>
            </div>
        <button onClick={()=>{vaciarCarrito()}} className={styles.btnvaciar}>Vaciar Carrito</button>
        </div>
        : 
        <div className={styles.packinfo}>
            <h2>El carrito esta vacio</h2>
        </div>
            }
       
      </div> 
      : ""}
    </div>
  );
};

export default Carrito;
