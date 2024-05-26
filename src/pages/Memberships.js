import React from "react";
import { Link } from "react-router-dom";
import "./Memberships.css";

function Memberships() {
  return (
    <>
      <div className="background_img">
        <div className="memberships_section1">
          <h1>MEMBERSHIPS</h1>
          <div className="all_cards">
            <div className="card">
              <h2>DAY PASS</h2>
              <p>
                Claim a free day pass if it's your first time coming to our gym
              </p>
              <h3 className="cost">FREE</h3>
              <Link to="/signup">
                <button>JOIN</button>
              </Link>
            </div>
            <div className="card">
              <h2>STUDENT</h2>
              <p>(monthly)</p>
              <h3 className="cost">£40</h3>
              <Link to="/signup">
                <button>JOIN</button>
              </Link>
            </div>

            <div className="card">
              <h2>STANDARD</h2>
              <p>(monthly)</p>
              <h3 className="cost">£50</h3>
              <Link to="/signup">
                <button>JOIN</button>
              </Link>
            </div>
            <div className="card">
              <h2>PRO</h2>
              <p>(yearly)</p>
              <div className="cost_div">
                <h3 className="cost_discount">£600</h3>
                <h3 className="cost">£540</h3>
              </div>

              <Link to="/signup">
                <button>JOIN</button>
              </Link>
            </div>
            <img className="gympic1" src="images/gympic.jpg" alt="" />
          </div>
        </div>
        <div className="memberships_section2">
          <div className="memberships_section2_div">
            <h1>WHAT WE OFFER</h1>
            <div className="section2_info">
              <div className="community">
                <h2>COMMUNITY</h2>
                <p>
                  Welcome to the heart of our fitness family – our vibrant
                  community! At Final Form, we believe that working out is not
                  just about achieving individual fitness goals but also about
                  fostering connections, support, and camaraderie among our
                  members.
                </p>
                <p>
                  Our community is diverse, inclusive, and driven by a shared
                  passion for health and wellness. Whether you’re a seasoned
                  athlete or just starting your fitness journey, you’ll find a
                  warm and welcoming environment here where everyone is
                  encouraged to thrive.
                </p>
              </div>
              <div className="competitions&rewards">
                <h2>COMPETITIONS & REWARDS</h2>
                <p>
                  Get ready to take your fitness journey to the next level with
                  our exciting competitions and rewarding incentives at Final
                  Form! We believe that setting goals and challenging yourself
                  is key to achieving long-term success, which is why we offer a
                  variety of competitions and rewards to keep you motivated and
                  engaged.
                </p>
                <p>
                  Whether you're aiming to crush a personal best, achieve a
                  specific fitness milestone, or simply stay committed to your
                  routine, our competitions provide the perfect opportunity to
                  push your limits and celebrate your achievements.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="memberships_section3">
          <h1>ABOUT US</h1>

          <p>
            The Final Form gym franchise was created in 1895, in London, United
            Kingdom. The founder 'James Truski' was a professional bodybuilder
            himself and even participated in many bodybuilding competitions in
            his prime.
          </p>
          <p>
            Soon after his retirement James Truski decided to start his own gym,
            one only he could dream of as a kid. Thats when the Final Form
            franchise began. Final Form currently holds over 124 gyms all over
            the world.
          </p>
        </div>
      </div>
    </>
  );
}

export default Memberships;
