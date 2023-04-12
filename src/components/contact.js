import React from "react";
import { ReactComponent as Git_logo } from "../gitlogo.svg";

export default function Contact() {
  return (
    <section id="Contact" style={{ minHeight: 300, backgroundColor: "black" }}>
      <div className="container">
        <h1 className="text-shaded fs-1">Contact:</h1>
        <div className="contact-detail ms-3 fs-4">
          <p>Address: Tanasit Nimpradit, Bangkok, Thailand</p>
          <p>E-mail: tns.nccm@gmail.com</p>
          <p>Tel: +6693-000-1675</p>
          <div className="contact-btn">
            <button
              type="button"
              className="btn btn-outline-secondary p-2 mx-1"
            >
              <Git_logo /> -<> Git-Profile</>
            </button>
            <button className="btn btn-outline-primary p-2 mx-1">
              <>Linkedin</>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
