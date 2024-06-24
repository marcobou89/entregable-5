
import axios from "axios"
import { useState } from "react"


const urlBase="https://pokeapi.co/api/v2/"

const useFetch = () => {
const [dataApi, setDataApi] = useState()
      
const getApi=(url)=>{
    
axios.get(url)
.then(res=>setDataApi(res.data))
.catch(err=>console.log(err))
    
}
const getType=(url)=>{
    
    axios.get(url)
    .then(res=>setDataApi({
        results:res.data.pokemon.map(
            type=>type.pokemon
        )
    }))
    .catch(err=>console.log(err))
        
    }

return[dataApi,getApi, getType]

}

export default useFetch