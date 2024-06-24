import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import HeaderPoke from '../complements/shared/HeaderPoke'


const ProtectedRoute = ({name}) => {

if(name.length>=3){
    return (<>
        
        <Outlet/>
        </>


    )
                
}else{
    return <Navigate to={"/"}/>
}
}

export default ProtectedRoute