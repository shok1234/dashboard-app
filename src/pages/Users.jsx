import { useState } from "react";
import UserCard from "../components/UserCard";

function Users({ users, selectedUser, setSelectedUser, loading }) {
  const[search,setSearch]=useState("");
  const filteredUsers =users.filter((user)=>
  user.name.toLowerCase().includes(search.toLowerCase())||
  user.email.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <input
      type="text"
      placeholder="Search users..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      <div className="userlayout">
        <div className="userlist">
        {loading ? (<p>Loading users...</p>
      ):(
        filteredUsers.map((user)=>(
        <UserCard
          key={user.id}
        user={user}
           isActive={selectedUser?.id === user.id}
          onClick={() => setSelectedUser(user)}
          />
          
        ))
      )}
         {!loading && filteredUsers.length===0 &&(
        <p>No user found</p>
      )}
        </div>
        <div className="userDetails">
       {selectedUser ? (
        <div className="cardt">
          <p>{selectedUser.name}</p>
          <p>{selectedUser.email}</p>
          <p>{selectedUser.phone}</p>
          <button className="butn" onClick={() => setSelectedUser(null)}>
            Close details
          </button>
        </div>
      ) : (
        <p className="psee">Click a user to see details</p>
      )}
    </div>

        </div>
      </div>
     
     


      
  );
}

export default Users;