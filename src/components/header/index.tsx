import { Github, Linkedin, X, Menu, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import social from "@/objects/social.json";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") ?? "light"
      : "light"
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      pointerEvents: "auto" as const,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      y: -100,
      opacity: 0,
      pointerEvents: "none" as const,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="w-[80%] max-md:w-[90%] mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <a href="/" className="flex items-center">
              <span>Pedro</span>
              <span className="text-gray-500">.dev</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a
              href="#about"
              className="text-sm font-medium hover:text-gray-500 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-gray-500 transition-colors"
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-gray-500 transition-colors"
            >
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="text-gray-600 cursor-pointer dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>

            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <Button size="sm" asChild>
              <a href="#contact">Contato</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-950 shadow-lg border-b z-50 px-6 py-6"
          initial="closed"
          animate={mobileMenuOpen ? "open" : "closed"}
          exit="closed"
          variants={variants}
        >
          <nav className="flex flex-col space-y-4">
            <a
              href="#about"
              className="text-lg font-medium hover:text-gray-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="text-lg font-medium hover:text-gray-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="text-lg font-medium hover:text-gray-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
