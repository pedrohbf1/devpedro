import { Github, Linkedin, Mail } from "lucide-react";
import social from "@/objects/social.json";

export default function Footer() {
  return (
    <footer className="border-t w-[80%] max-md:w-[90%] mx-auto py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-bold text-xl">
          <a href="/" className="flex items-center">
            <span>Pedro</span>
            <span className="text-gray-500">.dev</span>
          </a>
        </div>

        <div className="text-center md:text-left text-sm text-gray-500">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </div>

        <div className="flex gap-6">
          <a
            href={social.github}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={social.linkedin}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href={`mailto:${social.email}`}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
