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

        <label>Nombre</label>
        <input 
        id="name"
        value={name} 
        onChange={e => setName(e.target.value)}
        />

      <label>Correo</label>
       <input 
        id="email"
        value={email} 
        onChange={e => setEmail(e.target.value)}
        />

        <label>Clave</label>
        <input 
        id="password"
        type="password"
        value={password} 
        onChange={e => setPassword(e.target.value)}
        />

        <Link to="/dashboard">
        <button
        type="submit"
        onClick={onRegister}
        className="">
          Registrate
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
