import { motion } from "framer-motion";
import kanbanpic from "../assets/kanbanpic.png";
import frcpic from "../assets/frcpic.png";
import advisorpic from "../assets/advisorpic.png";
import foodiepic from "../assets/foodiepic.png";
import chasapic from "../assets/chasapic.png";
import writeup from "../assets/Tyler Tang - Task Manager - Side Project Write Up.pdf";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className={"flex-down"} style={{ textAlign: "left" }}>
        <h1>Projects</h1>
        <div
          className="card hoverable"
          onClick={() =>
            window.open("https://chasa-uwmadison.vercel.app/", "_blank")
          }
          style={{ cursor: "pointer" }}
        >
          <img src={chasapic} alt="CHASAPic" width={"40%"} />
          <div className="container">
            <h4>
              <b>UW-Madison CS Advising Website</b> - March, 2026 ~ May, 2026
            </h4>
            <p>
              This was a personal project for my social/cultural club, the
              Chinese American Student Association. PC/Tablet/Mobile
              compatitive, this website is the best demonstration of my UI/UX
              design skills. Serving 200+ members, it helps our relatively small
              club share vital info about events. Created using React and
              Tailwind CSS, hosted on Vercel.
            </p>
            <a
              href="https://github.com/TT6577/CHASA-UWMadison"
              target="_blank"
              onClick={(e) => e.stopPropagation()} // prevents card click from firing too
            >
              Full code here.
            </a>
            <ExternalLink style={{ float: "right" }} />
          </div>
        </div>

        <div
          className="card hoverable"
          onClick={() => window.open("https://tt6577.github.io/p2/", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <img src={advisorpic} alt="AdvisorPic" width={"40%"} />
          <div className="container">
            <h4>
              <b>UW-Madison CS Advising Website</b> - March, 2026 ~ May, 2026
            </h4>
            <p>
              This was the final group project for my web development class for
              Spring 2026. This website uses localStorage to remember favorited
              classes and pulls from the Wikipedia RESTful API to show
              recommended courses and fields. Created using HTML/CSS/JavaScript,
              hosted on GitHub Pages.
            </p>
            <a
              href="https://github.com/TT6577/p2"
              target="_blank"
              onClick={(e) => e.stopPropagation()} // prevents card click from firing too
            >
              Full code here.
            </a>
            <ExternalLink style={{ float: "right" }} />
          </div>
        </div>

        <div
          className="card hoverable"
          onClick={() =>
            window.open("https://kanban-app-prototype.vercel.app/", "_blank")
          }
          style={{ cursor: "pointer" }}
        >
          <img src={kanbanpic} alt="KanbanPic" width={"40%"} />
          <div className="container">
            <h4>
              <b>Kanban Task Manager</b> - April 4, 2026
            </h4>
            <p>
              Built in just 4(!) days as my introduction to React. A full-stack
              drag-and-drop Kanban board with anonymous guest auth, real-time
              database persistence via Supabase, priority sorting, due date
              indicators, and label filtering. Created using React + Vite,
              hosted on Vercel.
            </p>
            <a
              href="https://github.com/TT6577/kanban-app-prototype"
              target="_blank"
              onClick={(e) => e.stopPropagation()} // prevents card click from firing too
            >
              Full code here.
            </a>
            <br />
            <a
              href={writeup}
              target="_blank"
              onClick={(e) => e.stopPropagation()} // prevents card click from firing too
            >
              Read the writeup here!
            </a>
            <ExternalLink style={{ float: "right" }} />
          </div>
        </div>

        <div
          className="card hoverable"
          onClick={() =>
            window.open(
              "https://rainbow-mousse-9e3439.netlify.app/cs272-wordpress.cs.wisc.edu/s26/p2-site/index.html",
              "_blank",
            )
          }
          style={{ cursor: "pointer" }}
        >
          <img src={foodiepic} alt="FoodiePic" width={"40%"} />
          <div className="container">
            <h4>
              <b>MAD Eats - Madison Food Review</b> - January, 2026 ~ March,
              2026
            </h4>
            <p>
              This was the group project for the first half of the web dev class
              I took. I worked with three other people (same people from
              CSAdvisor website) to create a food review website with anonymous
              ratings, user comments and detailed maps. Created using WordPress,
              hosted on Netlify.
            </p>
            <ExternalLink style={{ float: "right" }} />
          </div>
        </div>

        <div
          className="card hoverable"
          onClick={() =>
            window.open(
              "https://two024-frc-scouting-website-resume-code.onrender.com/",
              "_blank",
            )
          }
          style={{ cursor: "pointer" }}
        >
          <img src={frcpic} alt="FRCPic" width={"40%"} />
          <div className="container">
            <h4>
              <b>FRC Robotics Scouting Website</b> - April, 2023 ~ July, 2024
              (Website may take 1-2 minutes to start up)
            </h4>
            <p>
              This website was made for my two high school FIRST robotics teams,
              serving around 100 students during our international robotics
              competitions. I worked with a team of 5 statistics team members to
              create an optimal scouting form. Still in use today! Created using
              Flask, Google APIs, basic SQL, Python and HTML, hosted on Render.
            </p>
            <a
              href="https://github.com/TT6577/2024-FRC-Scouting-Website-Resume-Code"
              target="_blank"
              onClick={(e) => e.stopPropagation()} // prevents card click from firing too
            >
              Full code here.
            </a>
            <ExternalLink style={{ float: "right" }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

//https://tt6577.github.io/p2/home.html
