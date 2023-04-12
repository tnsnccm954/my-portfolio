import React from "react";
import Navbar from "./components/navbar";
import About from "./components/about.js";
import Skills from "./components/skills.js";
import Project from "./components/project.js";
import Contact from "./components/contact.js";
import Welcome from "./components/welcome.js";
// or less ideally

function App() {
  return (
    <main>
      <header>
        <Navbar />
      </header>

      <div className="container">
        <Welcome />
        <About />
        <Project />
      </div>
      <Contact />
    </main>
  );
}

export default App;
