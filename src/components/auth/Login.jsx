import { useState } from "react";
import { loginService } from "../../services/services";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsValid, updateDate, isValidation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginService(username, password)
      .then(res => {
        setIsValid(res.isValidation)
        updateDate(res)
        if (res !== undefined && res !== null) {
          return navigate('/')
        }
      })
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      {isValidation ? null : (
        <li>
          <Link to="/register">register</Link>
        </li>
      )}
    </div>
  );
};

export default Login;
