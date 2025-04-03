import { Github, Linkedin, X, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import social from "@/objects/social.json";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="w-[80%] max-md:w-[90%] mx-auto">
        <div className=" flex h-16 items-center justify-between ">
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
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
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
        {mobileMenuOpen && (
          <div className="md:hidden px-4 py-6 bg-white dark:bg-gray-950 border-b">
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
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
