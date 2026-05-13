import { motion } from "framer-motion";
import kanbanpic from "../assets/kanbanpic.png"

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className={'flex-down'} style={{textAlign: 'left',}}>
        <h1>Projects</h1>
        <div class="card">
          <img src={kanbanpic} alt="KanbanPic" width={'50%'}/>
          <div class="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
