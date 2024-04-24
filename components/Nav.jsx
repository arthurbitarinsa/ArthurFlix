import React, { useState, useEffect } from "react";
import "../css/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      {/* <img src="/netflixicon.png" alt="Netflix Logo" className="nav__logo" /> */}
      <div>
        <ul>
          <li>
            <h2>
              <a href="#" class="net">
                ArthurFliX
              </a>
            </h2>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="">
            <a href="#">
              <i class="fas fa-search"></i>
            </a>
          </li>
          <li className="none1">
            <a href="#">Login</a>
          </li>
          <li className="none1">
            <a href="#">Create account</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
