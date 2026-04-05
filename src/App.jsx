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
  const [loading, setLoading] = useState(false);
  const [selectedUser,setSelectedUser]=useState(null);
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
    setLoading(true);
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();
    setUsers(data);
    setLoading(false);
  }

  
  return (
    <>
     
      {isLoggedIn ? (
        <>
        <div className='dashboard'>
          <div className='sidebar'>
          <button className='butn' onClick={()=>setPage("dashboard")}>Dashboard</button>
        <button className='butn' onClick={()=>setPage("profile")}>Profile</button>
        <button className='butn' onClick={()=>{setPage("users");fetchusers();}}>Users</button>
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
            {loading && <p>Loading users...</p>}
           
            {page ==="users" &&(
              <div>
                <div className='usersContainer'>
             { users.map(user => (
                <div className={selectedUser && selectedUser.id ===user.id
                  ? "card active"
                  :"card"
                } key={user.id}
                onClick={()=>setSelectedUser(user)}>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                 
                </div>
                
               ))}
              
             </div>
             {selectedUser ?(
                <div className='cardt'>    
                <p>{selectedUser.name}</p>
                <p>{selectedUser.email}</p>
                <p>{selectedUser.phone}</p>
                <button className="butn"onClick={()=>setSelectedUser(null)}>Close details</button>
                </div>
                
               
               ):(
                <p className='psee'>Click a user to see details</p>
               )}
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
