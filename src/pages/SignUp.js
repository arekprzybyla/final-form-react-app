import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <>
      <div className="signup_page">
        <div className="signup_form">
          <h1>Sign Up</h1>

          <form className="signup_form_form" action="">
            <div className="input_div">
              <input type="text" className="input_box" placeholder="Email" />
              <input type="text" className="input_box" placeholder="Password" />
              <input
                type="text"
                className="input_box"
                placeholder="Confirm Password"
              />
            </div>

            <p>
              <span className="checkbox_agreement">
                <input type="checkbox" />
              </span>
              I agree to the terms of service
            </p>
            <button className="sign_btn">SUBMIT</button>
          </form>
        </div>
        <img className="gympic1" src="images/gympic.jpg" alt="" />
      </div>
      <div className="signup_page_2">
        <a href="login.html">- already a member? login here -</a>
      </div>
    </>
  );
}

export default SignUp;
