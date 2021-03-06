import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";
import "./Pago.css";

function Pago () {
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
        if(transcript === "Tomar foto"|| transcript === " Tomar foto"||transcript === "tomar foto"||transcript === " tomar foto") 
        {
          console.log(transcript);
          setTimeout(() => {
            $("#photo").click()
          }, 2000); 
        }
        if(transcript === "llenar formulario"|| transcript === "Llenar formulario"){
          console.log(transcript);
          setTimeout(() => {
            $("#form").click()
          }, 2000); 
        }
      }
    }}
  useEffect(() => {
    voiceCommands();
  });
     return(
     
      <div className="container">
       <main className="main-container">
       <h1 className="pago">Pago</h1>

       <div className="iconAgua">
      <svg width="49" height="67" viewBox="0 0 49 67" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.4802 0.224609L21.4502 3.61681C21.4502 3.61681 16.279 9.47239 11.0674 17.0645C5.85584 24.6565 0.240234 33.7428 0.240234 42.4656C0.240234 48.8918 2.79409 55.0548 7.33997 59.5988C11.8858 64.1428 18.0514 66.6956 24.4802 66.6956C30.9091 66.6956 37.0746 64.1428 41.6205 59.5988C46.1664 55.0548 48.7202 48.8918 48.7202 42.4656C48.7202 33.7428 43.1046 24.6565 37.893 17.0645C32.6814 9.47239 27.5102 3.61681 27.5102 3.61681L24.4802 0.224609ZM24.4802 12.8646C26.2578 14.9645 27.8738 16.701 31.2674 21.6278C36.1558 28.7352 40.6402 37.7811 40.6402 42.4656C40.6402 51.4307 33.449 58.6189 24.4802 58.6189C15.5114 58.6189 8.32024 51.4307 8.32024 42.4656C8.32024 37.7811 12.8046 28.7352 17.693 21.6278C21.0866 16.701 22.7026 14.9645 24.4802 12.8646Z" fill="#3728B7"/>
      </svg>
      <h2>Agua</h2>
      </div>

      <div className="Pago">

      <div className="TomarFoto">
        <div className="iconoCamara">
        <svg width="100" height="71" viewBox="0 0 55 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M49.84 12.2299H42.3165L37.9733 7.48658H23.7333V12.2299H35.8848L40.228 16.9732H49.84V45.4333H11.8667V24.0882H7.12V45.4333C7.12 48.0421 9.256 50.1766 11.8667 50.1766H49.84C52.4507 50.1766 54.5867 48.0421 54.5867 45.4333V16.9732C54.5867 14.3644 52.4507 12.2299 49.84 12.2299ZM18.9867 31.2032C18.9867 37.7491 24.3029 43.0616 30.8533 43.0616C37.4037 43.0616 42.72 37.7491 42.72 31.2032C42.72 24.6574 37.4037 19.3449 30.8533 19.3449C24.3029 19.3449 18.9867 24.6574 18.9867 31.2032ZM30.8533 24.0882C34.7693 24.0882 37.9733 27.29 37.9733 31.2032C37.9733 35.1165 34.7693 38.3182 30.8533 38.3182C26.9373 38.3182 23.7333 35.1165 23.7333 31.2032C23.7333 27.29 26.9373 24.0882 30.8533 24.0882ZM11.8667 12.2299H18.9867V7.48658H11.8667V0.371582H7.12V7.48658H0V12.2299H7.12V19.3449H11.8667V12.2299Z" fill="#3629B7"/>
        </svg>
        </div>
     
      <Link to="/photo" className="BtnFoto">
        <button id="photo" >Tomar foto</button>
      </Link>
      </div>

      <div className="LLenarFormulario">
        <div className="iconoFormulario">
          <svg width="112" height="72" viewBox="0 0 82 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.5998 5.48674H5.23983V43.4334H33.7198V12.6017H26.5998V5.48674ZM5.23983 0.743408H28.9732L38.4665 10.2301V43.4334C38.4665 44.6914 37.9664 45.8979 37.0762 46.7874C36.1861 47.677 34.9787 48.1767 33.7198 48.1767H5.23983C3.98094 48.1767 2.7736 47.677 1.88343 46.7874C0.993258 45.8979 0.493164 44.6914 0.493164 43.4334V5.48674C0.493164 4.22873 0.993258 3.02225 1.88343 2.1327C2.7736 1.24315 3.98094 0.743408 5.23983 0.743408ZM9.9865 22.0884H28.9732V26.8317H9.9865V22.0884ZM9.9865 31.5751H28.9732V36.3184H9.9865V31.5751Z" fill="#3629B7"/>
          <path d="M45 33.0001C45.8218 32.3282 46.4759 31.5211 46.9228 30.6274C47.3696 29.7337 47.6 28.7719 47.6 27.8001C47.6 26.8283 47.3696 25.8665 46.9228 24.9728C46.4759 24.0791 45.8218 23.272 45 22.6001" stroke="#3629B7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M58 40.8C59.644 39.1189 60.9521 37.1006 61.8457 34.8665C62.7393 32.6325 63.2 30.2288 63.2 27.8C63.2 25.3713 62.7393 22.9676 61.8457 20.7336C60.9521 18.4995 59.644 16.4812 58 14.8" stroke="#3629B7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M68.3999 48.6C71.6873 45.9126 74.3036 42.6841 76.091 39.1093C77.8784 35.5345 78.7999 31.6874 78.7999 27.8C78.7999 23.9126 77.8784 20.0655 76.091 16.4907C74.3036 12.9159 71.6873 9.68743 68.3999 7" stroke="#3629B7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </div>

      <Link to="/MedioDePago" className="BtnFormulario">
        <button id="form">LLenar formulario</button>
        </Link>
      </div>

          </div>
        </main>
      </div>
    )
}

export default Pago; 
