import React, { useState, useEffect } from 'react';
import "./Transactions.css";
import imgTarget from "./images/80fd5b5c-fe16-455e-a7f5-3f69f11071b5-removebg-preview.png";
import { Link } from 'react-router-dom';
import $ from "jquery";



function Transactions() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.start();
  const voiceCommands = () => {
    // On start
    recognition.onstart = () => {
      console.log('Voice is actived');
    }
    // Do something when we get a result
    recognition.onresult = (e) => {
      let current = e.resultIndex;
      let transcript = e.results[current][0].transcript;
      let mobileRepeatBug = (current === 1 && transcript === e.results[0][0].transcript);
      if(!mobileRepeatBug) {
        if(transcript === "Agua"|| transcript === " Agua"||transcript === "agua"||transcript === " agua") {
          console.log(transcript);
          setTimeout(() => {
            $("#pay").click()
          }, 2000); 
        }
      }
    }}
  useEffect(() => {
    voiceCommands();
  });


  return (
    <div className="container">
      <main className="main-container">
      <div className="container-select">
        <select className="select-cards" placeholder="Elige una tarjeta">
        <option value="0">Elige una tarjeta</option>
        <option>Tarjeta de Débito</option>
        <option>Tarjeta de Crédito</option>
       </select>
       </div>

       <div className="cantainer-image">
        <img className="imgtarget" alt="" src={imgTarget}></img>
      </div>

      <section className="Transactions">
  
      <div className="options-views">
      <button className="Btn-Movimientos" aria-label="boton que selecciona el resumen de los movimientos en tu tarjeta">Saldos</button>
      <button className="Btn-Operaciones"  aria-label="boton que selecciona las operaciones">Operaciones</button>
     </div>


    <div className="Operations"  aria-label="Listado de cuentas que que puedes pagar" role="contenidos de operaciones">
     
    <div className="agua">
     <Link to="/Pago"> 
     <button  className="Btn-Agua"  id="pay" aria-label="Boton que selecciona la opcion de pagar Agua"> 
     <svg width="40" height="58" viewBox="0 0 49 67" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.4802 0.224609L21.4502 3.61681C21.4502 3.61681 16.279 9.47239 11.0674 17.0645C5.85584 24.6565 0.240234 33.7428 0.240234 42.4656C0.240234 48.8918 2.79409 55.0548 7.33997 59.5988C11.8858 64.1428 18.0514 66.6956 24.4802 66.6956C30.9091 66.6956 37.0746 64.1428 41.6205 59.5988C46.1664 55.0548 48.7202 48.8918 48.7202 42.4656C48.7202 33.7428 43.1046 24.6565 37.893 17.0645C32.6814 9.47239 27.5102 3.61681 27.5102 3.61681L24.4802 0.224609ZM24.4802 12.8646C26.2578 14.9645 27.8738 16.701 31.2674 21.6278C36.1558 28.7352 40.6402 37.7811 40.6402 42.4656C40.6402 51.4307 33.449 58.6189 24.4802 58.6189C15.5114 58.6189 8.32024 51.4307 8.32024 42.4656C8.32024 37.7811 12.8046 28.7352 17.693 21.6278C21.0866 16.701 22.7026 14.9645 24.4802 12.8646Z" fill="#3728B7"/>
    </svg>Agua</button> 
     </Link>
     </div>
  
    <div className="luz">
     <Link  to="/Pago">
      <button className="Btn-Luz" aria-label="boton que selecciona la opcion de pagar Luz">
     <svg width="51" height="53" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M43.7374 24.0909H50.5112V28.9091H43.7374V24.0909ZM0.836914 24.0909H7.61068V28.9091H0.836914V24.0909ZM27.932 0V7.22727H23.4161V0H27.932ZM9.68797 6.02273L14.4973 11.1782L11.2911 14.575L6.48172 9.46773L9.68797 6.02273ZM36.8508 11.1541L41.6376 6.02273L44.8664 9.46773L40.057 14.575L36.8508 11.1541ZM25.674 12.0455C29.2671 12.0455 32.7129 13.5683 35.2536 16.2791C37.7943 18.9898 39.2216 22.6664 39.2216 26.5C39.2216 31.8482 36.4895 36.5218 32.4478 39.0273V43.3636C32.4478 44.0026 32.2099 44.6153 31.7865 45.0671C31.363 45.5189 30.7887 45.7727 30.1899 45.7727H21.1582C20.5594 45.7727 19.9851 45.5189 19.5616 45.0671C19.1382 44.6153 18.9003 44.0026 18.9003 43.3636V39.0273C14.8586 36.5218 12.1265 31.8482 12.1265 26.5C12.1265 22.6664 13.5538 18.9898 16.0945 16.2791C18.6352 13.5683 22.081 12.0455 25.674 12.0455ZM30.1899 48.1818V50.5909C30.1899 51.2298 29.952 51.8426 29.5286 52.2944C29.1051 52.7462 28.5308 53 27.932 53H23.4161C22.8173 53 22.243 52.7462 21.8195 52.2944C21.3961 51.8426 21.1582 51.2298 21.1582 50.5909V48.1818H30.1899ZM23.4161 40.9545H27.932V35.8232C31.8382 34.7632 34.7057 30.9809 34.7057 26.5C34.7057 23.9443 33.7542 21.4932 32.0604 19.6861C30.3666 17.8789 28.0694 16.8636 25.674 16.8636C23.2787 16.8636 20.9815 17.8789 19.2877 19.6861C17.5939 21.4932 16.6424 23.9443 16.6424 26.5C16.6424 30.9809 19.5099 34.7632 23.4161 35.8232V40.9545Z" fill="#3729B7"/>
    </svg>
    Luz</button></Link>
    </div>
      
      <div className="cajero">
      <button className="Btn-Cajero-Efectivo"  aria-label="boton que selecciona la opcion de pagar Internet">
      <svg className="Icajero-efectivo" width="57" height="40" viewBox="0 0 57 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.9075 20C37.9075 18.4399 38.5181 16.9437 39.6049 15.8405C40.6917 14.7374 42.1658 14.1176 43.7028 14.1176C45.2398 14.1176 46.7139 14.7374 47.8008 15.8405C48.8876 16.9437 49.4982 18.4399 49.4982 20C49.4982 21.5601 48.8876 23.0563 47.8008 24.1595C46.7139 25.2626 45.2398 25.8824 43.7028 25.8824C42.1658 25.8824 40.6917 25.2626 39.6049 24.1595C38.5181 23.0563 37.9075 21.5601 37.9075 20ZM30.9531 0V40H56.4526V0H30.9531ZM51.8163 30.5882C49.2663 30.5882 47.18 32.7059 47.18 35.2941H40.2256C40.2256 34.046 39.7372 32.8491 38.8677 31.9666C37.9982 31.084 36.819 30.5882 35.5894 30.5882V9.41177C38.1625 9.41177 40.2256 7.31765 40.2256 4.70588H47.18C47.18 5.95396 47.6685 7.15092 48.538 8.03344C49.4074 8.91597 50.5867 9.41177 51.8163 9.41177V30.5882ZM17.0443 7.05882C19.5943 7.05882 21.6806 9.17647 21.6806 11.7647C21.6806 14.3529 19.5943 16.4706 17.0443 16.4706C14.4944 16.4706 12.408 14.3529 12.408 11.7647C12.408 9.17647 14.4944 7.05882 17.0443 7.05882ZM17.0443 2.35294C11.9212 2.35294 7.77178 6.56471 7.77178 11.7647C7.77178 16.9647 11.9212 21.1765 17.0443 21.1765C22.1674 21.1765 26.3168 16.9647 26.3168 11.7647C26.3168 6.56471 22.1674 2.35294 17.0443 2.35294ZM17.0443 25.8824C8.07314 25.8824 0.817383 30.0941 0.817383 35.2941V40H26.3168V35.2941H5.45365C5.45365 33.9294 9.51038 30.5882 17.0443 30.5882C21.2865 30.5882 24.3928 31.6471 26.3168 32.8235V27.5765C23.6973 26.5176 20.5215 25.8824 17.0443 25.8824Z" fill="#3728B7"/>
    </svg>
    Cajero/Efectivo</button>
    </div>

      </div>


 

    </section>
    </main>
    </div>
  );
}

export default Transactions;
