import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const DemoButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past 100vh
      const scrolled = window.scrollY > window.innerHeight;
      setIsVisible(scrolled);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-16 left-4 z-20"
        >
          <Link
            to="/contact-us"
            aria-label="Let's Talk"
            className="block hover:scale-105 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="btn-rounded !rounded-full bg-secondary text-primary shadow-large flex items-center gap-2 border border-secondary hover:bg-transparent backdrop-blur-sm hover:text-secondary font-bold">
              <span>Let's Talk</span>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoButton;
