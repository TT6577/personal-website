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
  NavLink,
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

import bgpattern from "./assets/circuit-board.svg";
import linkspattern from "./assets/rbwstripepattern.png";
import halopattern from "./assets/blackhalo.png";
import bannerpattern from "./assets/blackbannerpattern.png";

/**
  Color Scheme:
  UW-Madison Red: #C5050C
  UW-Madison White: #FFFFFF
  Darker Red: #980C38
  Dark blue: #162538
  Lighter Red: #F32D3E
  Darker blue: #061521
 */

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
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
              id="header"
              className="flex-down"
              style={{
                flex: 1.25,
                textAlign: "left",
                height: "100%",
                backgroundColor: "#FFFFFF",
                color: "#C5050C",
                overflow: "hidden", // keeps red bg from bleeding past the border-radius
                border: "#C5050C none",
                borderRight: "5px solid",
              }}
            >
              {/* Red profile section */}
              <div
                className={"flex-down"}
                style={{
                  backgroundColor: "#C5050C",
                  padding: "2rem",
                  paddingBottom: "0",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    position: "fixed",
                    inset: 0,
                    backgroundImage: `url(${halopattern})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "300px 300px",
                    backgroundPosition: "-38px -38px",
                    color: "white",
                    opacity: 0.3,
                    pointerEvents: "none",
                    zIndex: -0,
                  }}
                />
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
                    fontSize: "45px",
                    color: "#fff",
                    marginBottom: "0px",
                    zIndex: 3,
                  }}
                >
                  Tyler Tang
                </p>
                <h2 style={{ color: "#fff", paddingBottom: '10px' }}>
                  Computer Science Student & Developer
                </h2>
              </div>

              {/* Links section — default background */}
              <div
                className={"flex-down"}
                style={{ padding: "2rem", paddingTop: "0", gap:"10px"}}
              >
                <p style={{ color: "#121212" }}>
                  CS student at UW-Madison, graduating December 2027. I build
                  websites primarily using React and TypeScript!
                </p>
                <h2 style={{ color: "#121212" }}>Links</h2>
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
                <a
                  href="https://kanban-app-prototype.vercel.app"
                  target="_blank"
                >
                  Kanban Board Website
                </a>
                <a href={writeup} target="_blank">
                  Kanban Project Writeup
                </a>
                <a href="https://tt6577.github.io/p2/" target="_blank">
                  WebDev Class Project
                </a>
              </div>
            </div>

            {/* Right side of screen, where most of the content goes */}
            <div
              id="content"
              style={{
                flex: 3,
                overflowY: "scroll",
                height: "100vh",
                position: "relative",
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
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    position: "fixed",
                    inset: 0,
                    backgroundImage: `url(${bannerpattern})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1043px 100px",
                    backgroundPosition: "400px -12px",
                    color: "white",
                    opacity: 0.3,
                    pointerEvents: "none",
                    zIndex: -1,
                  }}
                />
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/experience">
                  Experience
                </NavLink>
                <NavLink className="nav-link" to="/projects">
                  Projects
                </NavLink>
                <NavLink className="nav-link" to="/contacts">
                  Contacts
                </NavLink>
              </div>

              {/* Displays designated pages */}
              <div
                style={{
                  border: "#121212 dashed 5px",
                  paddingLeft: "2rem",
                  paddingBottom: "2rem",
                  paddingRight: "2rem",
                  minHeight: "90.5%",
                  overflow: "hidden",
                  backgroundColor: "#FFFFFF",
                  color: "#121212",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Background pattern */}
                <div
                  style={{
                    position: "fixed",
                    inset: 0,
                    backgroundImage: `url(${bgpattern})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "1000px 1000px",
                    opacity: 0.03,
                    pointerEvents: "none",
                    zIndex: -1,
                  }}
                />
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
