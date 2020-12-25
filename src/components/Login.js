import React from "react";
import "../css/Login.css";
import { auth, provider } from "../Firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  // use the useState hook to pool information
  const [state, dispatch] = useStateValue();
  const login = () => {
    // sign in here
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // pushes the data into the data layer
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://officialpsds.com/imageview/7x/3y/7x3y20_large.png?1529187540" />
      </div>
      <div className="login__text">
        <h2>The Stoners'</h2>

        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" />
      </div>

      <div className="login__btn">
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;
