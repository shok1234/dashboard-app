function UserCard({ user, isActive, onClick }) {
  return (
    <div className={isActive ? "card active" : "card"} onClick={onClick}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

export default UserCard;