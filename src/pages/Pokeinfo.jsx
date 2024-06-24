

import { useParams } from 'react-router-dom'
import useFetch from '../hook/useFetch'
import { useEffect } from 'react'

import HeaderPoke from '../complements/shared/HeaderPoke'


const Pokeinfo = () => {

  const params=useParams()
  const {id}=params
const[pokemonid,getPokemonId]=useFetch()

useEffect(() => {
  
  getPokemonId(`https://pokeapi.co/api/v2/pokemon/${id}`)
}, [])


console.log(pokemonid);



  return (
    <div className='app_infoprincipal'>
     
    <div className='app_pokeinfo'>
    
      <article className='art_poke'>
          
        <figure className='figurepoke'>
          <img className='img_pokeinfo' src={pokemonid?.sprites?.other[`official-artwork`].front_default}/>
          <div className={`divimagen ${pokemonid?.types[0].type.name}`}   ></div>
        </figure>

      <div className='pokeiformation'>  
        <span >
        <h2>#{pokemonid?.id}</h2>
        <h2>{pokemonid?.name}</h2>
        </span>
            <span className="span1">
              <div><p>Peso</p><p>{pokemonid?.weight}</p></div>
              <div><p>Altura</p><p>{pokemonid?.height}</p></div>
            </span>

          <div className='div0'>

            <div className='div1'>
                  <h3 className='title2'>Tipo</h3> 
                  <div className='div_op'> 
                <h3 className={`propiedades ${pokemonid?.types[0].type.name}`}>{pokemonid?.types[0].type.name}</h3> 
                <h3 className={`propiedades ${pokemonid?.types[1]?.type?.name}`}>{pokemonid?.types[1]?.type?.name}</h3>
                </div>
            </div>

      
            
           <div className='div1'>
                  
                  <h3 className='title2'>habilidades</h3>
                  <div className='div_op'>
                  <h3 className="propiedades1">{pokemonid?.abilities[0]?.ability?.name}</h3>
                    <h3 className="propiedades1">{pokemonid?.abilities[1]?.ability?.name}</h3> 
            </div>
              </div>
              </div>
      

      
      
      <ul className='stats'>
      {

        pokemonid?.stats.map(stat=>(<>
          <li className='stats-item' key={stat.stat.url}>
            <div>{stat.stat.name}</div><div>{stat.base_stat}/250</div>
            

          </li>
          <div className='bar'>
          <div className='outbar'>
            <div className='inbar' style={{width:`${stat.base_stat/2.5}%`,}}></div>
          </div>
          </div>

       
          </>))
        
      }

      </ul>
      </div>

      </article>
      <article className='art_move'>
        <h1>MOVIMIENTOS</h1>
        <div></div>
      {
        pokemonid?.moves?.map(movements=><div><h4 key={movements.move.name}>{movements.move.name}</h4></div>)
      
      }
            
      </article>     
      
    </div>
    </div>
  )
}

export default Pokeinfo