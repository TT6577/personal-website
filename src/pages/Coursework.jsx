import { motion } from "framer-motion";

export default function Coursework() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h1 style={{lineHeight: '2'}}>Currently under construction... Check back in a week or so!</h1>
    </motion.div>
  );
}
