import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import Signup from "../Signup/Signup";

const Login = () => {
  // popup state

  const [popup, setPopup] = useState(false);

  const [errorData, SetErrorData] = useState("");
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const usernamechange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const API = axios.create({ baseURL: "http://localhost:5000" });
    API.post("/login", user)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          localStorage.setItem("uuu", JSON.stringify(res.data));
          navigate("/");
        }
      })

      .catch((e) => {
        SetErrorData(e.response.data);
      });
  };

  const hangelPopupsss = (e) => {
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };

  console.log(errorData);
  console.log(user);
  return (
    <>
      <div className="login-container-maindiv">
        <div
          className="login-main-container"
          style={{
            filter: popup && "blur(70px)",
          }}
        >
          <div className="login-leftside-container">
            <img
              style={{ width: "350px" }}
              src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg"
              alt=""
            />
            <h2>
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div className="login-rightside-container">
            <form onSubmit={submitForm} className="login-form-container">
              <input
                onChange={usernamechange}
                type="text"
                placeholder="Email Address or phone Number"
                name="email"
              />
              <input
                onChange={usernamechange}
                type="password"
                placeholder="Password"
                name="password"
              />
              <button
                style={{ backgroundColor: "blue", color: "white" }}
                type="submit"
              >
                Login
              </button>
              <p>Forget password?</p>
              {/* <Link to="/signup"> */}
              <button
                onClick={hangelPopupsss}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  widt: "100%",
                  textDecoration: "none",
                }}
              >
                Create a New Account
              </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
        <div className="popuup">
          {popup && <Signup closePopup={closePopup} />}
        </div>
      </div>
    </>
  );
};

export default Login;
