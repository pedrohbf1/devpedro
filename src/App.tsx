import { LazyMotion, domAnimation, m } from "framer-motion";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Projects from "./components/projects";
import About from "./components/about";
import Hero from "./components/hero";
import Header from "./components/header";

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="min-h-screen bg-white dark:bg-gray-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header />
        <main>
          {/* Hero entra automaticamente ao carregar */}
          <m.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
          </m.div>

          {/* About aparece quando entra na tela */}
          <m.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <About />
          </m.div>

          {/* Projects aparece quando entra na tela */}
          <m.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Projects />
          </m.div>

          {/* Contact aparece quando entra na tela */}
          <m.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Contact />
          </m.div>
        </main>
        <Footer />
      </m.div>
    </LazyMotion>
  );
}
