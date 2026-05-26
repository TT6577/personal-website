import resume from "../assets/Tyler Tang Resume.pdf";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileDown, ExternalLink,
} from "lucide-react";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className={"flex-down"} style={{ textAlign: "left", gap: "5px" }}>
        <h1>Hello, welcome to my website!</h1>
        <h2>About me...</h2>
        <p>
          {" "}
          My name is Tyler, I am 20, and I am from Taipei, Taiwan. I am
          currently a rising junior at the{" "}
          <span className={"hl"}>University of Wisconsin-Madison</span>, and I
          am majoring in Computer Science. I plan to graduate December of 2027,
          and I am currently looking for my first internship/job! I'm really
          interested in getting into the field of software engineering, and I
          specialize in <span className={"hl"}>React</span>
          &nbsp;and&nbsp;
          <span className={"hl"}>TypeScript</span>, with a solid foundation in{" "}
          <span className={"hl"}>JavaScript/HTML/CSS</span>.{" "}
        </p>
        <h2>Currently...</h2>
        <p>
          This summer, I have a few projects lined up. Making this portfolio
          website was the first thing on my list.
        </p>
        <p>
          The second project is a restaurant recommendation website, which will
          be a two person project where I collaborate with my girlfriend (a data
          science major) to analyze people's tastes and recommend them
          restaurants in Madison.{" "}
        </p>
        <p>
          The other project is a website for my social/cultural student
          organization, the Chinese American Student Association @ UW-Madison. A
          website would help <span className={"hl"}>serve 200+ members</span>{" "}
          with event & alumni archives, fam leaderboards, and other org info and
          resources.{" "}
        </p>
        <h2>Hobbies/Interests</h2>
        <p>
          I like playing basketball, volleyball and badminton in my spare time!
          I also enjoy being on exec board for the Chinese American Student
          Association @ UW-Madison, where I run events and manage funds. I used
          to like making video games when I had the time, but nowadays I prefer
          working on websites instead.
        </p>
      </div>

      <div style={{ height: "100px" }}></div>

      <div>
        <h2>Check out my other pages to learn more about me!</h2>
        <div className={"flex-side"} style={{ justifyContent: "center" }}>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
      </div>

      <div style={{ height: "120px" }}></div>

      <h1
        style={{
          lineHeight: "1",
          width: "90%",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        Take a copy of my resume with you as you leave!
      </h1>
      <a href={resume} download="Tyler Tang - Resume">
        Download{" "}
        <FileDown/>
      </a>
      <div style={{ height: "50px" }}></div>
      <h1>... or just take a quick peek.</h1>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        View Resume{" "}
        <ExternalLink/>
      </a>
    </motion.div>
  );
}
