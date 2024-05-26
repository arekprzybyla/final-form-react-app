import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <img className="gympic1" src="images/gympic.jpg" alt="" />
      <div className="section1">
        <h1 className="section1_h1">JOIN TODAY / FROM £40 A MONTH</h1>
        <ul>
          <li>-£20 Joining Fee</li>
          <li>{"-GYM Access (Monday to Sunday 7AM - 10PM)"} </li>
          <li>-Free Parking</li>
          <li>-Free Induction</li>
          <li>-Shower & Changing Facilities</li>
          <li>-Instructor Availability</li>
        </ul>
        <Link to="/signup">
          <button>JOIN NOW</button>
        </Link>
      </div>
      <div className="section2">
        <div className="section2_div">
          <h1>ONLINE GYM TOUR</h1>
          <p>Check out the full gym tour in the video below 👇</p>
          <iframe
            src="https://www.youtube.com/embed/r6A_27h-pFA?si=muGn7EwReeUbfVnu"
            frameBorder="0"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="section3">
        <div className="section3_div">
          <div className="section3_div_left">
            <h1>FREE DAY PASS</h1>
            <p>
              Free day pass to newcomers who are interested in joining our gym
              💪
            </p>
            <Link to="/memberships">
              <button>CLAIM DAY PASS</button>
            </Link>
          </div>
          <div className="section3_div_right">
            <h1>MEMBERSHIPS</h1>
            <p>
              Have a look at all our memberships options by clicking the button
              below 👇
            </p>
            <Link to="/memberships">
              <button>VIEW MEMBERSHIPS</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
