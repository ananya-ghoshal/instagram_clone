import { useState } from "react";
import "./Authentication.css";
import { Link } from "react-router-dom";
import LeftImage from "../images/instagram_left.png";
import Appstore from "../images/appStore.png";
import Playstore from "../images/playstore.png";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="signup">
      {/* left section of login page */}
      <div className="auth__left">
        <img src={LeftImage} alt="" />
      </div>
      {/* right section of login page */}
      <div className="auth__right">
        <form
          onSubmit={e => {
            e.preventDefault();
            formSubmit(email, username, password);
          }}
          className="form__signup"
        >
          <p className="logo">Ifstagram</p>
          <input
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            value={email}
          />
          <input
            onChange={e => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            value={username}
          />
          <input
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            value={password}
          />
          <input type="submit" value="Signup" role="button" />
        </form>
        {/* auth more section  */}
        <div className="auth__more">
          <span>
            <>
              Have an account?
              <Link to="/login" className="link">
                Login
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
async function formSubmit(email: string, username: string, password: string) {
  const response = await fetch("http://localhost:3030/auth/signup", {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({
      email,
      username,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status != 201) {
    console.error(await response.json());
  }
  const data: {
    code: number;
    id: number;
    name: string | undefined;
    email: string;
  } = await response.json();
  console.log(data);
}
export default Signup;
