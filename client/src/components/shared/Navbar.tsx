import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";

const NAVBAR_HEIGHT = 64;

export default function Navbar() {
  const [, setLocation] = useLocation();
  const [activeSection, setActiveSection] = useState<string>("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -NAVBAR_HEIGHT;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // 🔹 Scroll spy effect
  useEffect(() => {
    const sections = ["about", "projects", "contact"];

    const handleScroll = () => {
      let current = "";
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - NAVBAR_HEIGHT - 50; // adjust offset
          if (window.scrollY >= top) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (id: string) =>
    `transition-colors ${
      activeSection === id
        ? "text-blue-800 font-semibold"
        : "text-muted-foreground"
    } hover:text-blue-700`;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 
                 bg-black/70 dark:bg-gray-900/70 
                 backdrop-blur-md border-b shadow-sm 
                 text-foreground dark:text-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo navigates to home route */}
          <span
            className="font-semibold cursor-pointer text-3xl text-blue-500"
            onClick={() => {
              setLocation("/"); // optional if you want to reset route
              window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
            }}
          >
            {"AJ"}
          </span>

          {/* Scroll links */}
          <ul className="flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className={linkClasses("about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className={linkClasses("projects")}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className={linkClasses("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
