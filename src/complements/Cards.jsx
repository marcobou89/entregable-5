import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../hook/useFetch'
import { useNavigate } from 'react-router-dom'
import "../styles/Cards.css"

const Cards = ({url}) => {
  
  const[pokemon,getPokemon]=useFetch()
  const navigate=useNavigate()

  useEffect(() => {
 
    getPokemon(url)
  }, [])
  
  const handleClick =()=>{

    navigate(`/Pokedex/${pokemon?.id}`)



  }



    return (
    // <div className='app_card'>
      
      <div className='contenedor'>
      
      <article className={`card ${pokemon?.types[0].type.name}`} onClick={handleClick}>
      <figure className='img_poke'>
        <img className='img_card' src={pokemon?.sprites?.other[`official-artwork`].front_default} alt="" />
      </figure>
      <div className='info'>
            <h3>{pokemon?.name}</h3>

          <div className='div_type'>

          {
            pokemon?.types.map(type=>(
              <span className={`slot${type.slot}`} key={type.type.url}>{type.type.name}</span>))  
          }
          </div>

            {/* <div className='div_type'>
                  <span>{pokemon?.types[0].type.name}</span><span>{pokemon?.types[1]?.type.name}</span>
            </div> */}
            
            <h4 className='tipo'>tipo</h4>
            <hr className='hr'/>
            <div className='descript'>
            <div className='div_descript'>
            <h4>{pokemon?.stats[0]?.stat?.name}</h4>
            <h3>{pokemon?.stats[0]?.base_stat}</h3>
            </div>
            <div className='div_descript'>
            <h4>{pokemon?.stats[1]?.stat?.name}</h4>
            <h3>{pokemon?.stats[1]?.base_stat}</h3>
            </div>
            </div>
            <div className='descript'>
              <div className='div_descript'>
            <h4>{pokemon?.stats[2]?.stat?.name}</h4>
            <h3>{pokemon?.stats[2]?.base_stat}</h3>
            </div>
            <div className='div_descript'>
           
            <h4>{pokemon?.stats[5]?.stat?.name}</h4>
            <h3>{pokemon?.stats[5]?.base_stat}</h3>
            </div>
            </div>
      </div>
      </article>
      </div>
    // </div>
  )
}

export default Cards