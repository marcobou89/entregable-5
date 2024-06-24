import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterPoke } from '../complements/shared/FooterPoke'
import "../pages/Home.css"




const Home = ({setName}) => {
  
const navigate =useNavigate()

  const textInput=useRef()

const handleSubmit=(event)=>{
    event.preventDefault()
  setName(textInput.current.value)
textInput.current.value=""
navigate("/Pokedex")
  }




  
  
  
  
  return (
    <div className='home'>
      <div className='principal'>
        <figure>
          <img className='img_home' src='.\pokedex.png' alt="" />
        </figure>
      <h2>¡Hi triner!</h2>
      <p>to star give me your name</p>
      <form onSubmit={handleSubmit}>
        <input className="input_text" ref={textInput} type="text" name="name" placeholder="Tu name"/>
        <button className='button1'>Comenzar</button>
      </form>
      </div>
      <FooterPoke/>
    </div>
  )
}

export default Home