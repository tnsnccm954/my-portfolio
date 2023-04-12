import React from "react";
import {ReactComponent as ReactLogo } from "../nccm_logo.svg";

export default function Navbar() {
  
  return (
    <nav
      className="navbar navbar-expand-lg  justify-content-between fixed-top navbar-dark bg-dark  "
      aria-label="Eleventh navbar example"
      id="navbar"
    >
      <div className="container px-4 px-lg-3 ">
        <a className="navbar-brand " href="#">
            <ReactLogo />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbaritem"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end " id="navbaritem">
          <ul className="navbar-nav mb-2 mb-lg-0 fs-5 text-center ">
            <li className="nav-item  ">
              <a className="nav-link active text-white" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white" href="#about">
                AboutMe
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white" href="#skills">
                MySkills
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white" href="#exp">
                Experience
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-white" href="#exp">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
