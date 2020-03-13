import React, { useState, useEffect } from 'react';
import Camera from 'react-html5-camera-photo';
import { Link } from 'react-router-dom'
import $ from "jquery";
import './TakePhoto.css';
import 'react-html5-camera-photo/build/css/index.css';
 
import ImagePreview from './ImagePreview'; // source code : ./src/demo/AppWithImagePreview/ImagePreview
 
function TakePhoto (props) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.start();
    const { classes } = props
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
          console.log(transcript);
          if(transcript === "Tomar foto"|| transcript === " Tomar foto"||transcript === "tomar foto"||transcript === " tomar foto") {
            console.log(transcript);
            $("#inner-circle").click()
          }
        }
      }}
    useEffect(() => {
      voiceCommands();
    });
  const [dataUri, setDataUri] = useState('');
 
  function handleTakePhotoAnimationDone (dataUri) {
    console.log('takePhoto');
    setDataUri(dataUri);
  };
  const isFullscreen = false;

  return (
    <React.Fragment>
    <div id="camera">
      {
        (dataUri)
          ? <ImagePreview dataUri={dataUri}
            isFullscreen={isFullscreen}
          />
          : <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
          />
      } 
      </div>

       <div className="photo-container">
        <label className="select-label" for="select_type" >Empresa</label>
        <div class="inside">
        <select className="SelectPay" id="select_type">
        <option value="all">Aguas Andinas</option>
        <option value="all">Chilectra</option>
        <option value="all">VTR</option>
        </select>
        
        <label className="select-label" for="select_cash" >Monto</label>
        <select className="SelectPay"  id="select_cash">
        <option value="all">15.000</option>
        <option value="all">25.000</option>
        <option value="all">35.000</option>
        </select>

        <label className="select-label" for="select_credit" >Método de pago</label>
        <select className="SelectPay"  id="select_credit">
        <option value="all">Débito</option>
        <option value="all">Crédito</option>
        </select>

        {/* <label className="select-label" for="select_credit" class="">Método de pago</label>
        <input className="SelectPay" type="date"></input> */}
        </div>
        

        <div>
        <Link to="/Transactions">
        <button className="BtnPay">Confirmar Pago</button>
        </Link>
        </div>
        </div>
      </React.Fragment>
  );
}
 
export default TakePhoto;