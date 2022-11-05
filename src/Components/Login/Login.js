import React,{useState,useContext}from 'react';
import{FirebaseContext} from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import {useNavigate} from 'react-router-dom'
function Login() {

  const[email, setEmail] = useState('')
  const [password, setPassword] =useState('')
  const{firebase}=useContext(FirebaseContext)
  const navigate=useNavigate()
  const handleLogin = (e)=>{
    e.preventdefault()
    FirebaseContext.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigate.push('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }
 
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
      
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
