import React from "react";

export default function Welcome(){
    return(
        <div id="#" className="welcome">
            <h1>
              <p className="text-shaded text-welcome">Hi, I am </p>
              <p className="text-shaded">Tanasit Nimpradit</p>
            </h1>
            <p className="fs-3">
              <i className="text-red">New graduated</i> - <i className="text-indigo">Developer</i>
            </p>
            <a className="btn btn-explore p-2 px-3 text-indigo" href="#about">
              Explore me.
            </a>
          </div>
    );
}