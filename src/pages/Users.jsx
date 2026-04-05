import UserCard from "../components/UserCard";

function Users({ users, selectedUser, setSelectedUser, loading }) {
  return (
    <div>
      {loading && <p>Loading users...</p>}

      <div className="usersContainer">
        {users.map(user => (
          <UserCard
            key={user.id}
            user={user}
            isActive={selectedUser?.id === user.id}
            onClick={() => setSelectedUser(user)}
          />
        ))}
      </div>

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
  );
}

export default Users;