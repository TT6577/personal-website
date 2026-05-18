import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className={"flex-down"} style={{ textAlign: "left", alignContent: 'left' }}>
        <h1>Projects</h1>
        <div
          className="card"
          onClick={() => window.open("https://tt6577.github.io/p2/", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <div className="container">
            <h4>
              <b>UW-Madison CS Advising Website</b> - March, 2026 ~ May, 2026
            </h4>
            <p>Placeholder</p>
            <a
              href="https://github.com/TT6577/p2"
              target="_blank"
              onClick={(e) => e.stopPropagation()} // prevents card click from firing too
            >
              Full code here.
            </a>
          </div>
        </div>

        <div
          className="card"
          onClick={() =>
            window.open("https://kanban-app-prototype.vercel.app/", "_blank")
          }
          style={{ cursor: "pointer" }}
        >
          <div className="container">
            <h4>
              <b>Kanban Task Manager</b> - April 4, 2026
            </h4>
            <p>placeholder</p>
            <a
              href="https://github.com/TT6577/kanban-app-prototype"
              target="_blank"
              onClick={(e) => e.stopPropagation()} // prevents card click from firing too
            >
              Full code here.
            </a>
            <br />
            <a
              target="_blank"
              onClick={(e) => e.stopPropagation()} // prevents card click from firing too
            >
              Read the writeup here!
            </a>
          </div>
        </div>

        <div
          className="card"
          onClick={() =>
            window.open(
              "https://rainbow-mousse-9e3439.netlify.app/cs272-wordpress.cs.wisc.edu/s26/p2-site/index.html",
              "_blank",
            )
          }
          style={{ cursor: "pointer" }}
        >
          <div className="container">
            <h4>
              <b>MAD Eats - Madison Food Review</b> - January, 2026 ~ March,
              2026
            </h4>
            <p>
              Placeholder
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
