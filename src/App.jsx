import { useState } from 'react'
import './App.css'

function App() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [isLoggedIn,setisLoggedIn]=useState(false);
  const [error,setError]=useState("");
  const [loggedUser, setLoggedUser] = useState("");
  const handleLogin=()=>{
     if(email==="" && password===""){
      setError("Please fill the fields first");
      return;
    }
    if(email==="admin@test.com" && password==="1234"){
      setisLoggedIn(true);
      setLoggedUser(email);
      setError("");
    }else{
      setError("Invalid email or password");
    }
   
  };
  const handleLogout=()=>{
    setisLoggedIn(false);
    setEmail("");
    setPassword("");
    setLoggedUser("");
  
  }

  return (
    <>
    
      
      {isLoggedIn ? (
        <>
        <div className='dashboard'>
          <div className='sidebar'>
          <h2>Dashboard</h2>
        <h2>Profile</h2>
        <button className='butn' onClick={handleLogout}>
        Log out
      </button>
          </div>
          <div className='main'>
           <h2 className='dashb'>Welcome, {loggedUser}</h2>
        <p>You are successfully logged in 🎉</p>
          </div>
        </div>
        
        
        </>
        
      ):(
        <div className='divofoutput'>
      <input  className='inpu'
      placeholder='Email'
      value={email}
      onChange={(e)=> {
        setEmail(e.target.value); setError("");}}
      />
      <input 
      className='inpu'
      type='password'
      placeholder='Password'
      value={password}
      onChange={(e)=> {setPassword(e.target.value); setError("");}}/>
      <button className='butn' onClick={handleLogin}>
      Login
      </button>
      {error && 
      
      <p style={{color: "red"}}>
        {error}
        </p>}
        
      </div>

      )}


    </>
  )
}

export default App
