import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        formSubmit(email, username, password);
      }}
      className="signup"
    >
      <img src="images/instagram_logo.png" alt="" />
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
