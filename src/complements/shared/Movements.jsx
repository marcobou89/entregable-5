import React, { useEffect } from 'react'
import useFetch from '../../hook/useFetch'

const Movements = () => {

    
    const [dataMovements,getMovements]=useFetch()
   
    useEffect(() => {
     getMovements("https://pokeapi.co/api/v2/move")
    }, [])
    
    console.log(dataMovements);

  return (
    <div>
        {/* {
        dataMovement?.results?.map(movements=><h3 key={movements.name}>{movements.name}</h3>)
        } */}
    </div>
  )
}

export default Movements