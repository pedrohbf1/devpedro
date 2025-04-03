import { Button } from "../ui/button";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24 lg:py-32"
    >
      <div className="w-[80%] max-md:w-[90%] mx-auto">
        <div className="container  space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm">
              Sobre
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Minha Trajetória
            </h2>
            <p className="text-gray-600 dark:text-gray-400 md:text-lg/relaxed mx-auto">
              Conheça um pouco mais sobre minha jornada e habilidades
            </p>
          </div>

          <div className="grid md:grid-cols-2  gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Quem Sou</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Sou um Desenvolvedor Full-Stack especializado em React, React
                Native, Next.js, Node.js e TypeScript. Tenho experiência na
                criação de aplicações web e mobile responsivas e escaláveis,
                além do desenvolvimento de APIs robustas.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Cursando Engenharia de Software, tenho foco na criação de
                interfaces intuitivas, código limpo e boas práticas de
                desenvolvimento. Busco sempre inovação e eficiência, entregando
                soluções modernas e escaláveis.
              </p>
              <div className="pt-4">
                <Button variant="outline" asChild>
                  <a href="#contact">Vamos Conversar</a>
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Habilidades</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <h4 className="font-medium text-lg mb-4">Frontend</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      React & Next.js & React Native
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      Tailwind CSS
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      HTML & CSS
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <h4 className="font-medium text-lg mb-4">Backend</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      Node.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      Express
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      ORM
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      PostgreSQL & MySQL
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <h4 className="font-medium text-lg mb-4">Ferramentas</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      Git & GitHub
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      Docker
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      Firebase
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      Context API & Redux
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <h4 className="font-medium text-lg mb-4">Outros</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      UI/UX
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      Clean Code, Design Patterns & SOLID
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      Testes Automatizados (Jest, Cypress)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      SEO & Performance Web
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
