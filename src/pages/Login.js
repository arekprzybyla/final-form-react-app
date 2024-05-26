import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="login_page">
        <div className="login_form">
          <h1>Login</h1>

          <form className="login_form_form" action="">
            <div className="input_div">
              <input type="text" className="input_box" placeholder="Email" />
              <input type="text" className="input_box" placeholder="Password" />
            </div>

            <p>
              <span className="checkbox_agreement">
                <input type="checkbox" />
              </span>
              Remember password
            </p>
            <button className="sign_btn">SUBMIT</button>
          </form>
        </div>
        <img className="gympic1" src="images/gympic.jpg" alt="" />
      </div>
      <div className="signup_page_2">
        <a href="login.html">- new here? sign up here -</a>
      </div>
    </>
  );
}

export default Login;
