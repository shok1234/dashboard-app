function Profile({ loggedUser }) {
  return (
    <div>
      <h2>Email: {loggedUser}</h2>
      <h2>Status: Active</h2>
    </div>
  );
}

export default Profile;