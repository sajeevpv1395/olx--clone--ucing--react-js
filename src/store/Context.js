import { createContext, useState }from "react";


export const FirebaseContext=createContext(null)

export const AuthContext = createContext(null);



  export default function Context ({children}) {
    const[user,setUser]= useState(null)

    return(
        <AuthContext.Provider value={{user}}>
          {children}
        </AuthContext.Provider>



    )
   

}


/*
import * as React from 'react'
import {useUser} from './context/auth'

const AuthenticatedApp = React.lazy(() => import('./authenticated-app'))
const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

function App() {
  const user = useUser()
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export App


import { createContext, useState } from "react";


export const FirebaseContext=createContext(null)

export const AuthContext = createContext(null);



  export default function Context ({children}) {
    const[user,setUser]= useState(null)

    return(
        <AuthContext.Provider value={{user}}>
          {children}
        </AuthContext.Provider>



    )
   

}










*/