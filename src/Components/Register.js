import React, { useState } from 'react';
import firebase from '../Firebase';
import { withRouter, Link } from 'react-router-dom'
import './Register.css'



function Register(props) {
  const { classes } = props 

  const [ name, setName ] = useState("");
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");

  return (
    <div className="container">
    <main className="main-container">
      <section className="register-container">

         <div className="registrate">
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.342773 8C0.342773 7.71 0.446773 7.42 0.653773 7.21L7.18077 0.33C7.59577 -0.11 8.26877 -0.11 8.68377 0.33C9.09877 0.77 9.09877 1.47 8.68377 1.91L2.90877 8L8.68377 14.08C9.09877 14.52 9.09877 15.23 8.68377 15.67C8.26877 16.1 7.59577 16.1 7.18077 15.67L0.653773 8.79C0.446773 8.57 0.342773 8.28 0.342773 8Z" fill="#281C9D"/>
        </svg>
        <p>Regístrate</p>
        </div>
        
        <label className="name">Nombre</label>
        <input 
        id="name"
        className="register-input"
        value={name} 
        onChange={e => setName(e.target.value)}
        />

      <label className="email">Correo</label>
       <input 
        id="email"
        className="register-input"
        value={email} 
        onChange={e => setEmail(e.target.value)}
        />

        <label className="password">Clave</label>
        <input 
        id="password"
        type="password"
        className="register-input"
        value={password} 
        onChange={e => setPassword(e.target.value)}
        />

        <Link className="btn-ok" to="/pin">
        <button
        type="submit"
        onClick={onRegister}
        className="">
          Registrar
        </button>
        </Link>

      </section>
    </main>
    </div>

  )

  async function onRegister () {
    try {
      await firebase.register(name, email, password)
      props.history.replace('/dashboard')
    } catch (error) {
      alert(error.message)
    }
  }


}

export default withRouter(Register);
