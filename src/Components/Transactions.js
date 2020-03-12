import React from "react";
import "./Transactions.css";
import imgTarget from "./images/80fd5b5c-fe16-455e-a7f5-3f69f11071b5-removebg-preview.png";


function Transactions() {
  return (
    <div className="Transactions">

      <select className="select-cards" placeholder="Elige una targeta">
      <option value="0">Seleccione una targeta</option>
      </select>
  

      <div className="cantainer-image">
    <img className="imgtarget" src={imgTarget}></img>
      </div>
      
<div className="SecondaryContainer">

      <div className="options-views">
      <button className="Btn-Movimientos" aria-label="boton que selecciona ver el resumen de los movimientos en tu targeta">Movimientos</button>
      <button className="Btn-Operaciones"  aria-label="boton que selecciona ver opciones de operaciones">Operaciones</button>
     </div>

      <div className="Operations"  aria-label="contenido de operaciones que puede realizar" role="contenidos de operaciones">
      <button  className="Btn-Agua"  aria-label="boton que selecciona la opcion de pagar Agua">Agua</button>
      <button className="Btn-Luz"  aria-label="boton que selecciona la opcion de pagar Luz">Luz</button>
      <button className="Btn-Cajero-Efectivo"  aria-label="boton que selecciona la opcion de pagar Internet">Cajero/Efectivo</button>
      <button className="Btn-Personales"  aria-label="boton que selecciona la opcion de pagar Targetas">Personales</button>
      </div>


      </div>

    </div>
  );
}

export default Transactions;
