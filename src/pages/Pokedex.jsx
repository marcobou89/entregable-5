import { useEffect, useState } from "react"
import Cards from "../complements/Cards"
import useFetch from "../hook/useFetch"
import Filter from "../complements/shared/Filter"
import { useSelector } from "react-redux"
import "../styles/Pokedex.css"
import HeaderPoke from "../complements/shared/HeaderPoke"
import { FooterPoke } from "../complements/shared/FooterPoke"

const urlBase="https://pokeapi.co/api/v2/"


const Pokedex = ({name}) => {
    
  const [dataApi,getApi,getType]=useFetch()

  const [dataType, setDataType] = useState()

  const dataInput=useSelector(store=>store.pokemon)

  useEffect(() => {
    if (dataType) {
      const urlType=dataType
      getType(urlType)
    }else{
      const urlbase="https://pokeapi.co/api/v2/pokemon/?limit=20"
      getApi(urlbase)
    }

    
  }, [dataType])
  
console.log(dataApi);
console.log(dataType);
  
  const cbfilter=(pokemons)=>{
    return pokemons.name.includes(dataInput);

  }


  return (
    
    <div className="pokedex">
      <HeaderPoke/>
      <div className="title_bien">
          <h2>Bienvenido {name} ,</h2><p className="text2">aquí podrás encontrar tu pokemón favorito</p> 
      </div>
      <div className="filter">
           
        <Filter
        setDataType={setDataType}
        dataType={dataType}/>
    </div>
    <article className=" app_pokedex">
    {
    dataApi?.results?.filter(cbfilter).map(pokemons=>
      <Cards
      key={pokemons.name}
      url={pokemons.url}
     />
      )}
    </article>
    
    
    </div>
  )
}

export default Pokedex
