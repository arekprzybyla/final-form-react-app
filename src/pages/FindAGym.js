import React from "react";
import "./FindAGym.css";

function FindAGym() {
  return (
    <>
      <div className="findagym_section1">
        <h1>FIND A GYM</h1>
        <svg
          className="findagym_arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path>
        </svg>
        <img className="gympic1" src="images/gympic.jpg" alt="" />
      </div>
      <div className="findagym_section2">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d194592.94011491886!2d-0.13280437627262037!3d51.49538157610536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sThe%20Gym%20Group%20london!5e0!3m2!1sen!2suk!4v1715173558001!5m2!1sen!2suk"
          width="1200"
          height="650"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default FindAGym;
