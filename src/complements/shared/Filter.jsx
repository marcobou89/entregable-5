import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../../hook/useFetch'
import { useDispatch } from 'react-redux'
import { setInputValue } from '../../assets/store/slices/pokemon'
import "/Users/usuario/Desktop/REACT/entregable-5-pokedex/src/styles/filter.css"



const Filter = ({setDataType,dataType}) => {
    const [pokemon_nom, setPokemon_nom] = useState()
    const [select, setSelect] = useState("normal")
    const textInput = useRef()

    const [type,getType]=useFetch()

    const dispatch=useDispatch()

useEffect(() => {

  getType("https://pokeapi.co/api/v2/type")
}, [])

console.log(type);


  const handleSubmit=(event)=>{
    event.preventDefault()
    dispatch(setInputValue(textInput.current.value.trim().toLowerCase()))
    textInput.current.value=""
  
  }
console.log(pokemon_nom);






  return (
    
        <div className='div_input'>
          <form className='input1' onSubmit={handleSubmit}>
                <input className='input_text' ref={textInput} type="text" placeholder='Busca un Pokemón' />
                <button className='button1'>Buscar</button>
          </form>
          
           <select className='input2' value={dataType} onChange={sele=>setDataType(sele.target.value)}>
             <option value="">All</option>
            {
              type?.results.map((type)=>{
                return(
                    
                  <option value={type?.url}>{type?.name}</option>
                 
                )
              })
            }
             </select>
          
      </div>
    
  )
}

export default Filter