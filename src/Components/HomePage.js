import React , { useEffect }from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from "jquery";
import './HomePage.css'




function HomePage(props) {
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
        if(transcript === "Pin" || transcript === " Pin" || transcript === "pin"|| transcript === " pin" ) {
          console.log(transcript);
          setTimeout(() => {
            $("#home").click()
          }, 1000); 
        }
      }
    }}
  useEffect(() => {
    voiceCommands();
  });
  return (
    <div className="container">
    <main className="main-container">
      <section className="homepage-container">

      <label className="title-homepage">¿Cómo quieres acceder?</label>


      <div className="btn-eyetrack">
      <svg width="81" height="69" viewBox="0 0 81 69" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40.5 25.875C37.8147 25.875 35.2393 26.7837 33.3405 28.4012C31.4417 30.0187 30.375 32.2125 30.375 34.5C30.375 36.7875 31.4417 38.9813 33.3405 40.5988C35.2393 42.2163 37.8147 43.125 40.5 43.125C43.1853 43.125 45.7606 42.2163 47.6595 40.5988C49.5583 38.9813 50.625 36.7875 50.625 34.5C50.625 32.2125 49.5583 30.0187 47.6595 28.4012C45.7606 26.7837 43.1853 25.875 40.5 25.875ZM40.5 48.875C36.0245 48.875 31.7322 47.3605 28.5676 44.6647C25.4029 41.9688 23.625 38.3125 23.625 34.5C23.625 30.6875 25.4029 27.0312 28.5676 24.3353C31.7322 21.6395 36.0245 20.125 40.5 20.125C44.9755 20.125 49.2677 21.6395 52.4324 24.3353C55.5971 27.0312 57.375 30.6875 57.375 34.5C57.375 38.3125 55.5971 41.9688 52.4324 44.6647C49.2677 47.3605 44.9755 48.875 40.5 48.875ZM40.5 12.9375C23.625 12.9375 9.21375 21.8787 3.375 34.5C9.21375 47.1213 23.625 56.0625 40.5 56.0625C57.375 56.0625 71.7862 47.1213 77.625 34.5C71.7862 21.8787 57.375 12.9375 40.5 12.9375Z" fill="#3629B7"/>
      </svg>
      <Link to="/dashboard" className="btn-link" >
      <button
        type="submit"
        className="">
          Eyectrack
      </button>
      </Link>
      </div>

      <div className="btn-pin" >
      <svg width="94" height="63" viewBox="0 0 94 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M41.225 22.0923H38.4625V17.1702C38.4625 7.84024 31.1667 0.199951 22.1 0.199951C13.1042 0.199951 5.7375 7.76678 5.7375 17.1702V22.0923H2.975C1.34583 22.0923 0 23.3412 0 24.9574V57.1348C0 58.6776 1.34583 59.9999 2.975 59.9999H41.225C42.8542 59.9999 44.2 58.7511 44.2 57.1348V24.9574C44.2 23.4147 42.8542 22.0923 41.225 22.0923ZM24.8625 39.7972V46.7764C24.8625 48.3926 23.5875 49.6415 22.1 49.6415C20.5417 49.6415 19.3375 48.3191 19.3375 46.7764V39.7972C18.3458 38.9891 17.7083 37.6668 17.7083 36.271C17.7083 33.7732 19.6917 31.7162 22.1 31.7162C24.5083 31.7162 26.4917 33.7732 26.4917 36.271C26.4917 37.7402 25.8542 38.9891 24.8625 39.7972ZM32.3708 22.0923H11.8292V17.1702C11.8292 11.2931 16.4333 6.51789 22.1 6.51789C27.7667 6.51789 32.3708 11.2931 32.3708 17.1702V22.0923Z" fill="#3629B7"/>
      <path d="M57.2 44.4C58.0219 43.7281 58.6759 42.921 59.1228 42.0273C59.5696 41.1336 59.8 40.1718 59.8 39.2C59.8 38.2282 59.5696 37.2664 59.1228 36.3727C58.6759 35.479 58.0219 34.6719 57.2 34" stroke="#3629B7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M70.2 52.2C71.844 50.5188 73.1521 48.5005 74.0457 46.2664C74.9393 44.0324 75.4 41.6287 75.4 39.2C75.4 36.7712 74.9393 34.3675 74.0457 32.1335C73.1521 29.8994 71.844 27.8811 70.2 26.2" stroke="#3629B7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M80.6 59.9999C83.8874 57.3125 86.5037 54.084 88.2911 50.5092C90.0785 46.9344 91 43.0873 91 39.1999C91 35.3125 90.0785 31.4654 88.2911 27.8906C86.5037 24.3158 83.8874 21.0873 80.6 18.3999" stroke="#3629B7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <Link to="/pin" className="btn-link" >
      <button
      id="home"
        type="submit"
        className="">
          Pin
      </button>
      </Link>
      </div>

      <label className="cuenta">¿No tienes Cuenta?</label>
      <Link to="/register">
      <button
        type="submit"
        component={Link}
        to="/register"
        className="btn-register">
          Regístrate
      </button>
      </Link>
      </section>
    </main>
    </div>
  )




}

export default withRouter(HomePage);
