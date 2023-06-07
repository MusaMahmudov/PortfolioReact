import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="person">
          <i class="fa-brands fa-apple"></i>
          <h1 className="sebastian">Sebastian Petrovic</h1>
        </div>
        <div className="items">
          <ul>
            <li>
              <button>Dribbble</button>
            </li>
            <li>
              <button>Linkedin</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
          <button className="view">View Work</button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
