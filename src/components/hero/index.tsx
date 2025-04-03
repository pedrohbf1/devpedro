import { domAnimation, LazyMotion, motion } from "framer-motion";
import { Button } from "../ui/button";
import imageHero from "../../../public/foto-linkedin.jpeg";

export default function Hero() {
  return (
    <section className="w-[80%] max-md:w-[90%] mx-auto py-16 md:py-24 lg:py-32">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <LazyMotion features={domAnimation}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:w-1/2"
          >
            <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm">
              Desenvolvedor Full Stack
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Olá, eu sou <span className="text-gray-500">Pedro Henrique</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[600px] leading-relaxed">
              Especializado em criar experiências digitais excepcionais e
              interfaces intuitivas com foco em performance e usabilidade.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#projects">Ver Projetos</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Entre em Contato</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:full flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-800 shadow-xl">
              <img
                src={imageHero}
                alt="Foto do Desenvolvedor"
                width={400}
                height={400}
                className="object-cover -translate-y-27 scale-140"
              />
            </div>
          </motion.div>
        </LazyMotion>
      </div>
    </section>
  );
}
