import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        loginFormSubmit(email, password);
      }}
      className="login"
    >
      <img src="images/instagram_logo.png" alt="" />
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
