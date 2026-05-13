import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className={"flex-down"} style={{ textAlign: "left" }}>
        <h1>Trying to find me?</h1>
        <h2 style={{ paddingTop: "0px" }}>Here are my contacts!</h2>
        <h3>Contacts</h3>
        <p>
          Personal Email:{" "}
          <a href="mailto:tylerzt28@gmail.com">tylerzt28@gmail.com</a>
        </p>
        <p>Phone: (281) 272-8722</p>
        <h3>Socials</h3>
        <p>
          GitHub:{" "}
          <a href="https://github.com/TT6577" target="_blank">
            TT6577 - https://github.com/TT6577
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/tyler-tang-155a82322/"
            target="_blank"
          >
            https://www.linkedin.com/in/tyler-tang-155a82322/
          </a>
        </p>
      </div>
    </motion.div>
  );
}
