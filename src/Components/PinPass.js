import React, {useState , useEffect}from 'react';
import './PinPass.css'




const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.start();


function PinPass() {

  const voiceCommands = () => {
    recognition.onstart= () =>{
      console.log("aca escuchan2")

    }
  recognition.onresult = (e) =>{
    let current = e.resultIndex;
    let transcript = e.results[current][0].transcript;
    console.log(transcript);
  // Línea para arreglar bug en mobile
    let mobileRepeatBug = (current === 1 && transcript === e.results[0][0].transcript);

    if(!mobileRepeatBug) {
      if(transcript.length === 4) {
        document.getElementById('final').innerHTML = transcript
      }
    }}}
//     setTimeout(() => {
//       recognition.start();
//     }, 50);
//   }
//   recognition.onspeechend = () => {
//     recognition.stop();
//     console.log('voice stopped');
//   }
// }

  useEffect(( ) =>{
    voiceCommands();
  });
  // const ButtonsPin = () => {
  //   let numbersbuttons = 9
  //   for ( let i = 0 ; i <= numbersbuttons ; i++){
  //  document.getElementById("numbers").innerHTML +=`<button class="numbersButtons">${i}</button> `
  //  }}
     
  //    useEffect(( ) =>{
  //      ButtonsPin();
  //    });

  return (
    <div id="containerPin" className="container-fluid row justify-content-center ">
      <h3 className=" text-center mb-4">Hola Rodrigo</h3>
      <div className="warning row justify-content-center text-center"><p>Introduce el PIN (número secreto) de tu tarjeta o usuario de Banca electrónica</p></div>
     
        <p id="final"></p>
        <div className="acces text-center"> <p>NO PUEDO ACCEDER</p></div>
        <div id="numbers" className="column justify-content-center">
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
          <div className="cont3"> <button>7</button>
          <button>8</button>
          <button>9</button>
          </div>
         <div className="cont4"> 
           <button>0</button>
          <button>0</button>
          <button>B</button></div>
        </div>
    <div className="row justify-content-center"> <button type="button"   className="btn btn-light">Confirmar</button></div>
</div>
  );
};

export default PinPass;

// estilos css

