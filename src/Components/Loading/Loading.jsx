import "./style.css";
import { motion } from "framer-motion";
import { HashLoader } from "react-spinners";

function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.8 }}
    >
      <div className="background-glow"></div>

      <motion.h1
        className="loading-logo"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.6,
        }}
      >
        Mohab<span>.</span>
      </motion.h1>

      <motion.p
        className="loading-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 1.5,
        }}
      >
        Building Modern Web Experiences{" "}
      </motion.p>

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 1.3,
        }}
      >
        <HashLoader className="loader" color="#00eeff" size={45} />
      </motion.div>
    </motion.div>
  );
}

export default LoadingScreen; 