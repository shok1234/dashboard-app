function Sidebar({ setPage, fetchUsers, handleLogout, setSelectedUser }) {
  return (
    <div className="sidebar">
      <button className="butn" onClick={() => setPage("dashboard")}>
        Dashboard
      </button>

      <button className="butn" onClick={() => setPage("profile")}>
        Profile
      </button>

      <button
        className="butn"
        onClick={() => {
          setPage("users");
          fetchUsers();
          setSelectedUser(null);
        }}
      >
        Users
      </button>

      <button className="butn" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}

export default Sidebar;