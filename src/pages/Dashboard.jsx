function Dashboard({ loggedUser }) {
  return (
    <div>
      <h2 className="dashb">Welcome, {loggedUser}</h2>
      <p>You are successfully logged in 🎉</p>
    </div>
  );
}

export default Dashboard;