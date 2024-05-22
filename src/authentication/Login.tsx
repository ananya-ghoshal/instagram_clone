import { useState } from "react";
import "./Authentication.css";
import LeftImage from "../images/instagram_left.png";
import Appstore from "../images/appStore.png";
import Playstore from "../images/playstore.png";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      {/* left section of login page */}
      <div className="auth__left">
        <img src={LeftImage} alt="" />
      </div>
      {/* right section of login page */}
      <div className="auth__right">
        <form
          onSubmit={e => {
            e.preventDefault();
            loginFormSubmit(email, password);
          }}
          className="form__login"
        >
          <p className="logo">Clone</p>
          <input
            onChange={e => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            value={email}
          />
          <input
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            value={password}
          />
          <input type="submit" value="Log In" role="button" />
        </form>

        {/* auth more section  */}
        <div className="auth__more">
          <span>
            <>
              Don't have an account?
              <Link to="/signup" className="link">
                Sign up
              </Link>
            </>
          </span>
        </div>
        <div className="downloadDetails">
          <p>Get the app.</p>
          <div className="download">
            <div className="appStore">
              <img src={Appstore} alt="" />
            </div>
            <div className="playStore">
              <img src={Playstore} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function loginFormSubmit(email: string, password: string) {
  const resp = await fetch("http://localhost:3030/auth/signin", {
    method: "POST",
    body: JSON.stringify({ username_email: email, password }),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(resp.status, await resp.json());
}

export default Login;
