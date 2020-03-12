import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import $ from "jquery";
import './PinPass.css'


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.start();
function PinPass() {
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
        if(transcript  ) {
          console.log(transcript);
          document.getElementById("pin").innerHTML= transcript
          setTimeout(() => {
            $("#ok").click()
          }, 3000); 
        }
      }
    }}
  useEffect(() => {
    voiceCommands();
  });
  return (
    <div className="container">
      <main className="main-container">
        <section className="pinpass-container">
       <h3 className="title-name">Hola Rodrigo</h3>
       <div className="text-above">
         <p>Por favor ingresa tu clave</p>
      </div>

      <div className="container-pin"> 
      <p id="pin"></p>
      </div>

      <div id="numbers" className="container-numbers">
          <div className="cont1">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          </div>
          <div className="cont2">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          </div>
          <div className="cont3"> 
          <button>7</button>
          <button>8</button>
          <button>9</button>
          </div>
         <div className="cont4"> 
           <button>*</button>
          <button>0</button>
          <button>B</button></div>

          <div className="not-access"> <p>NO PUEDO ACCEDER</p></div>
        </div>
     <Link to="/dashboard"><button id="ok" className="confirmar">Confirmar</button></Link>
     </section>
     </main>
    </div>
  );
}
export default PinPass;