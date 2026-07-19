import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import chargedfield from "../assets/chargedfield.JPG";
import hockeybasketball from "../assets/hockeybasketball.JPG";
import littlepaperhat from "../assets/littlepaperhat.jpg";
import playwithwater from "../assets/playwithwater.jpg";
import rexthomaspic from "../assets/rexthomaspic.JPG";
import chasarep from "../assets/chasarep.JPG";
import concessions from "../assets/concessions.JPG";
import fam from "../assets/fam.JPG";
import dance from "../assets/dance.jpg";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={"flex-down"}
        style={{ textAlign: "left", alignContent: "left" }}
      >
        <h1>Work Experience</h1>

        <div className="card">
          <div className="container">
            <h4>
              <b>Frontend Developer, Nisinoon Project</b> - May 2026 ~ Present
            </h4>
            <h5>Wisconsin Indigenous Languages Lab, UW–Madison.</h5>
            <h5>
              Remote | NSF-funded Algonquian language database used by linguists
              and tribal communities for language revitalization
            </h5>
            <hr style={{ border: "1px solid #ccc", margin: "5px 0" }} />
            <ul style={{ padding: "1rem" }}>
              <li>
                Redesigning and rebuilding the frontend of nisinoon.net in
                vanilla HTML/CSS/JS integrated with a Node.js/Express backend,
                collaborating weekly with the project lead and UX designer
              </li>
              <li>
                Fixed bugs in and added new functionality to the site's search
                system, and led a redesign of the homepage and search interface
                (multi-language filtering, reorganized advanced-search fields)
                based on specs from the project lead and UX designer
              </li>
              <li>
                Improved page load time by optimizing graphics and image assets
                across high-traffic pages
              </li>
            </ul>
            <a
              href="https://nisinoon.net/"
              target="_blank"
              onClick={(e) => e.stopPropagation()} // prevents card click from firing too
            >
              Nisinoon website found here.
            </a>
          </div>
        </div>

        <div className="card">
          <div className="container">
            <h4>
              <b>Summer Camp Counselor/Instructor</b> - May 2023 ~ July 2025
              (Summers only)
            </h4>
            <h5>Taipei Youth Program Association</h5>
            <hr style={{ border: "1px solid #ccc", margin: "5px 0" }} />
            <ul style={{ padding: "1rem" }}>
              <li>
                Led 2-3 counselors in supervising daily activities for 15-25
                children aged 5-12 through daily activities, ensuring safety and
                engagement
              </li>
              <li>
                Worked closely with special needs students to foster an
                inclusive and diverse environment
              </li>
              <li>
                Sole returning counselor promoted to instructor based on
                proactive leadership and teaching potential
              </li>
              <li>
                Planned and facilitated age-appropriate fitness activities to
                children of various ages and abilities
              </li>
            </ul>
            <a
              href="https://www.typa.org.tw/course/summer-camps/day-camp-a-taste-of-typa-2/"
              target="_blank"
              onClick={(e) => e.stopPropagation()} // prevents card click from firing too
            >
              Summer Camp website found here.
            </a>
          </div>
        </div>

        <h1>Leadership Experience</h1>

        <div className="card">
          <div className="container">
            <h4>
              <b>Finance Chair/Treasurer</b> - April 2025 ~ Present
            </h4>
            <h5>Chinese American Student Association (CHASA)</h5>
            <hr style={{ border: "1px solid #ccc", margin: "5px 0" }} />
            <ul style={{ padding: "1rem" }}>
              <li>
                Manages and records association funds and set budgets for
                outings & events, ~8000USD total yearly budget
              </li>
              <li>
                Organizes fundraising events and collaboration opportunities
                with local restaurants
              </li>
              <li>
                Group lead for concessions at UW-Madison affiliated sports
                centers in order to raise money for events
              </li>
            </ul>
            <a
              href=""
              target="_blank"
              onClick={(e) => e.stopPropagation()} // prevents card click from firing too
            >
              CHASA website found here.
            </a>
          </div>
        </div>

        <div className="card">
          <div className="container">
            <h4>
              <b>Statistics Programmer & Scout Manager</b> - April 2023 ~ July
              2024
            </h4>
            <h5>FIRST Robotics Competition</h5>
            <hr style={{ border: "1px solid #ccc", margin: "5px 0" }} />
            <ul style={{ padding: "1rem" }}>
              <li>
                Sole developer of statistics recording website used across two
                FRC teams in multiple international competitions
              </li>
              <li>
                Communicated game plans and scouting data between scouting and
                driver teams
              </li>
              <li>
                Analyzed game data through the website to predict game outcomes
                and prepare game plans
              </li>
              <li>
                Managed multiple teams of scouts to record data and interview
                teams to create alliances & mentored programmers
              </li>
            </ul>
            <p>
              See more about scouting website on{" "}
              <Link to="/projects">projects</Link> page
            </p>
          </div>
        </div>

        <h1>Gallery</h1>
        <div className={"flex-down"}>
          <div>
            <h2>Chinese American Student Association</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                margin: "1rem 0",
              }}
            >
              <img
                src={chasarep}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <img
                src={concessions}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <img
                src={fam}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <img
                src={dance}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
          <div>
            <h2>TYPA Summer Camp</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 4fr",
                gap: "10px",
                margin: "1rem 0",
              }}
            >
              <img
                src={littlepaperhat}
                style={{
                  width: "100%",
                  height: "600px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  gridRow: "span 2",
                }}
              />
              <img
                src={playwithwater}
                style={{
                  width: "100%",
                  height: "295px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <img
                src={hockeybasketball}
                style={{
                  width: "100%",
                  height: "295px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>

          <div>
            <h2>FIRST Robotics Competition</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                margin: "1rem 0",
              }}
            >
              <img
                src={rexthomaspic}
                style={{
                  width: "100%",
                  height: "600px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <img
                src={chargedfield}
                style={{
                  width: "100%",
                  height: "600px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
