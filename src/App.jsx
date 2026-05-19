import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

// Icons library
import {
  AlertTriangle,
  Search,
  Tag,
  SquareKanban,
  ClipboardList,
  ListPlus,
} from "lucide-react";

// Slide animation library
import { AnimatePresence, dimensionValueTypes, motion } from "framer-motion";

// Different pages
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Coursework from "./pages/Coursework.jsx";
import Contacts from "./pages/Contacts.jsx";

import ScrollToTop from "./components/ScrollToTop.jsx";

// Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

import resume from "./assets/Tyler Tang Resume.pdf";
import writeup from "./assets/Tyler Tang - Task Manager - Side Project Write Up.pdf";
import photo from "./assets/TylerPicSquareSmall.jpg";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/coursework" element={<Coursework />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <Analytics />
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <BrowserRouter>
          <ScrollToTop />
          {/* Main div holding all content */}
          <div className={"flex-side"} style={{ height: "100%", gap: "0px" }}>
            {/* Left side of the screen, where the header goes */}
            <div
              id={"header"}
              className={"flex-down"}
              style={{
                flex: 1,
                textAlign: "left",
                padding: "2rem",
                backgroundColor: "",
                border: "5px solid",
                borderRadius: "20px",
                height: "100%",
              }}
            >
              <img
                src={photo}
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <p
                style={{
                  fontSize: "50px",
                  color: "white",
                  marginBottom: "10px",
                }}
              >
                Tyler Tang
              </p>

              <h2>Computer Science Student & Developer</h2>
              <p>
                CS student at UW-Madison, graduating December 2027. I build
                websites primarily using React and TypeScript!
              </p>
              <h2>Links</h2>
              <a href="https://github.com/TT6577" target="_blank">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tyler-tang-155a82322/"
                target="_blank"
              >
                LinkedIn
              </a>
              <a href={resume} target="_blank">
                Resume
              </a>
              <a href="https://kanban-app-prototype.vercel.app" target="_blank">
                Kanban Board Website
              </a>
              <a href={writeup} target="_blank">
                Kanban Project Writeup
              </a>
              <a href="https://tt6577.github.io/p2/" target="_blank">
                WebDev Class Project
              </a>
            </div>

            {/* Right side of screen, where most of the content goes */}
            <div
              id="content"
              style={{
                flex: 3,
                overflowY: "scroll",
                height: "100vh",
              }}
            >
              {/* Navbar */}
              <div
                className={"flex-side"}
                id={"navbar"}
                style={{
                  paddingBottom: "20px",
                  paddingTop: "1.5rem",
                  paddingLeft: "2rem",
                }}
              >
                <Link to="/">Home</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/coursework">Coursework</Link>
                <Link to="/contacts">Contacts</Link>
              </div>

              {/* Displays designated pages */}
              <div
                style={{
                  border: "5px dotted",
                  borderRadius: "1rem",
                  paddingLeft: "2rem",
                  paddingBottom: "2rem",
                  paddingRight: "2rem",
                  minHeight: "90.5%",
                  overflow: "hidden",
                }}
              >
                <AnimatedRoutes />
                <div style={{ height: "180px" }}></div>
                <p style={{ width: "60%", margin: "0 auto" }}>
                  Built using React, JavaScript and CSS. Hosted on Vercel. Full
                  website code can be found on my GitHub{" "}
                  <a
                    href="https://github.com/TT6577/personal-website"
                    target="_blank"
                  >
                    here.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
