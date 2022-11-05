import React,{useContext,useEffect} from 'react';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { FirebaseContext } from './store/Context';
import { AuthContext } from './store/Context';


export default function App  ()  {
const{setUser}=useContext(AuthContext)
const{firebase}=useContext(FirebaseContext)

useEffect(()=>{

firebase.auth().onAuthStateChanged((user)=>{
  setUser(user)
})



})



  return (

<Router>

<Routes>
    
        
         
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
   

</Routes>
</Router>
   





 
    
    
  );
}
