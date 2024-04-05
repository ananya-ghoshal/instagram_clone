import { useState } from "react";
import "./Authentication.css";
import Login from "./Login";
import Signup from "./Signup";
import HomepageImage from "./instagram_left.png";

function Authentication() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <div className="authentication">
      <div className="auth__left">
        <img src={HomepageImage} alt="" />
      </div>

      <div className="auth__right">
        {active === "login" ? <Login /> : <Signup />}
        <div className="auth__more">
          <span>
            {active === "login" ? (
              <>
                Dont have an account?
                <button onClick={handleChange}>Sign up</button>
              </>
            ) : (
              <>
                Have an account?<button onClick={handleChange}>Login</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
