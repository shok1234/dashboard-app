import { useState } from 'react'
import './App.css'

function App() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [isLoggedIn,setisLoggedIn]=useState(false);
  const [error,setError]=useState("");
  const [loggedUser, setLoggedUser] = useState("");
  const [page, setPage] = useState("dashboard");
  const [users, setUsers] = useState([]);
  const handleLogin=()=>{
     if(!email || !password){
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
  const fetchusers=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();
    setUsers(data);
  }
  
  return (
    <>
     
      {isLoggedIn ? (
        <>
        <div className='dashboard'>
          <div className='sidebar'>
          <button className='btun' onClick={()=>setPage("dashboard")}>Dashboard</button>
        <button className='btun' onClick={()=>setPage("profile")}>Profile</button>
        <button className='btun' onClick={()=>{setPage("users");fetchusers();}}>Users</button>
        <button className='butn' onClick={handleLogout}>
        Log out
      </button>
          </div>
          <div className='main'>
            {page === "dashboard" &&(
              <div>
              <h2 className='dashb'>Welcome, {loggedUser}</h2>
        <p>You are successfully logged in 🎉</p>
        </div>
            )}
            {page ==="profile" && (
              <div>
                <h2>Email: {loggedUser}</h2>
                <h2>Status: Active</h2>
              </div>
            )}
            {page ==="users" &&(
              <div>
             { users.map(user => (
                <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.emial}</p>
                </div>
               ))
            }
              </div>
            )}
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
