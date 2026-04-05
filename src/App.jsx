import { useState } from 'react'
import { fetchUsersApi } from "./services/api";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import Login from "./components/Login";
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
    setPage("dashboard");
    setUsers([]);
    setSelectedUser(null);
  }
  const fetchUsers=async()=>{
    if(users.length >0 ) return;
    setLoading(true);
    try{
    const data= await fetchUsersApi();
    setUsers(data);
    }catch(err){
      console.error(err);
    }finally{
    setLoading(false);
    }
  }

  
  return (
    <>
      {isLoggedIn ? (
        <div className='dashboard'>
          <Sidebar
          setPage={(newpage)=>{
            setPage(newpage);
          if(newpage !=="users"){
            setSelectedUser(null);
          }}}
          fetchUsers={fetchUsers}
          handleLogout={handleLogout}
          setSelectedUser={setSelectedUser}
          />
          <div className='main'>
            {page === "dashboard" && <Dashboard loggedUser={loggedUser}/>}
            {page ==="profile" &&  <Profile loggedUser={loggedUser}/> }
             {page === "users" && (
              <Users
              users={users}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
              loading={loading}
             />
             )}
          </div>
           </div>
      ):(
      <Login 
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      handleLogin={handleLogin}
      error={error}
      />
      )}
    </>
  )}

export default App
