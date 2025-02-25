import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}  // Start invisible & slightly below
      animate={{ opacity: 1, y: 0 }}   // Fade in & move to normal position
      exit={{ opacity: 0, y: -20 }}    // Fade out & move up
      transition={{ duration: 1.5 }}   // Smooth transition speed
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
