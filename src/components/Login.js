import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });
  const userlogined = useSelector((state) => state.userlogined);

  const setValueForUser = (key, value) => {
    const newVal = { ...user, [key]: value };
    setUser(newVal);
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: user });
  };

  useEffect(() => {
    if (userlogined.username) {
      navigate("/users");
    }
  }, [userlogined, navigate]);

  return (
    <form className="container">
      <label>User name: </label>
      <input
        id="username"
        onChange={(e) => setValueForUser("username", e.target.value)}
        type="text"
      />
      <br />
      <br />
      <label>Password: </label>
      <input
        id="password"
        onChange={(e) => setValueForUser("password", e.target.value)}
        type="password"
      />
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
