import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={() => formSubmit(email, username, password)}
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
      <button>Signup</button>
    </form>
  );
}
function formSubmit(email: string, username: string, password: string) {}
export default Signup;
