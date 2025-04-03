import { Button } from "../ui/button";
import CardProject from "../cardProject";
import projects from "@/objects/projects.json";
import { useState } from "react";

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);
  const isAtEnd = visibleCount >= projects.length;

  const loadMore = () => {
    if (isAtEnd) {
      setVisibleCount(3);
    } else {
      setVisibleCount((prevCount) => prevCount + 3);
    }
  };

  return (
    <section
      id="projects"
      className="py-16 w-[80%] max-md:w-[90%] mx-auto md:py-24 lg:py-32"
    >
      <div className="container  space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Projetos em Destaque
          </h2>
          <p className="text-gray-600 dark:text-gray-400 md:text-lg/relaxed mx-auto">
            Conheça alguns dos meus trabalhos mais recentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleCount).map((project, index) => (
            <CardProject key={index} project={project} />
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Button
            variant="outline"
            className="cursor-pointer"
            size="lg"
            onClick={loadMore}
          >
            {isAtEnd ? "Mostrar Menos" : "Ver Mais Projetos"}
          </Button>
        </div>
      </div>
    </section>
  );
}
