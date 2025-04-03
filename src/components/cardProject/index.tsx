import { ExternalLink, Github } from "lucide-react";

interface Project {
  titulo: string;
  cargo: string;
  url: string;
  repositorio?: string;
  imagemCapa: string;
  linguagens: string[];
}

interface Props {
  project: Project;
}

export default function CardProject({ project }: Props) {
  return (
    <div className="group rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.imagemCapa}
          alt="Foto do Desenvolvedor"
          width={500}
          height={400}
          className="object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-gray-800 dark:text-gray-200">
          {project.cargo}
        </span>
        <div className="flex items-center gap-4 justify-between">
          <h3 className="font-bold text-xl truncate">{project.titulo}</h3>
          <div className="flex gap-3">
            {project.repositorio && (
              <a
                href={project.repositorio}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            )}
            <a
              href={project.url}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">Live Demo</span>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.linguagens.map((linguagem, index) => {
            return (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-gray-800 dark:text-gray-200"
              >
                {linguagem}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
