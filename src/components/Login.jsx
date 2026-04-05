function Login({ email, password, setEmail, setPassword, handleLogin, error }) {
  return (
    <div className="divofoutput">
      <input
        className="inpu"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <input
        className="inpu"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button className="butn" onClick={handleLogin}>
        Login
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;