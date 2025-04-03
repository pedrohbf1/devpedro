import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import social from "@/objects/social.json";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [statusSendEmail, setStatusSendEmail] = useState("");
  const schemaZod = z.object({
    name: z.string().min(1, { message: "Nome é obrigatório" }),
    email: z.string().email({ message: "Email inválido" }),
    subject: z.string().min(1, { message: "Assunto é obrigatório" }),
    message: z.string().min(1, { message: "Mensagem é obrigatória" }),
  });
  const [loading, setLoading] = useState(false);

  type schema = z.infer<typeof schemaZod>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schema>({
    resolver: zodResolver(schemaZod),
  });

  function onSubmit(data: schema) {
    setLoading(true);
    const templateParams = {
      from_name: data.name,
      email: data.email,
      message: data.message,
      subject: data.subject,
    };

    emailjs
      .send(
        "service_fvbon5a",
        "template_41bc2mv",
        templateParams,
        "tyvwKsI0qV4cxXXqB"
      )
      .then(() => {
        setLoading(false);
        setStatusSendEmail("Email enviado!");
      })
      .catch(() => {
        setLoading(false);
        setStatusSendEmail("Erro ao enviar email!");
      });
  }

  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24 lg:py-32"
    >
      <div className="w-[80%] max-md:w-[90%] mx-auto">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-gray-600 dark:text-gray-400 md:text-lg/relaxed mx-auto">
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Informações de Contato</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Estou disponível para freelance, projetos de longo prazo ou
                oportunidades de emprego.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100  dark:bg-gray-800 p-3 rounded-full">
                  <Mail className="h-5 w-5 dark:text-gray-300 transition-colors text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{social.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                  <Linkedin className="h-5 w-5 dark:text-gray-300 transition-colors text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a href={social.linkedin} className="font-medium">
                    linkedin.com/{social.linkedin.split("linkedin.com/")[1]}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                  <Github className="h-5 w-5 dark:text-gray-300 transition-colors text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <a href={social.github} className="font-medium">
                    github.com/{social.github.split("github.com/")[1]}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Seu nome"
                    className="h-12"
                  />
                  {errors.name && (
                    <span className="text-sm text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="seu@email.com"
                    className="h-12"
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Assunto
                </label>
                <Input
                  id="subject"
                  {...register("subject")}
                  placeholder="Como posso ajudar?"
                  className="h-12"
                />
                {errors.subject && (
                  <span className="text-sm text-red-500">
                    {errors.subject.message}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Descreva seu projeto ou dúvida..."
                  className="min-h-[150px] resize-none"
                />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <Button
                type="submit"
                className={`w-full ${
                  statusSendEmail == "Email enviado!"
                    ? "bg-green-500"
                    : statusSendEmail == "Erro ao enviar email!"
                    ? "bg-red-500"
                    : ""
                } h-12 text-base`}
              >
                {!loading ? (
                  statusSendEmail == "" ? (
                    "Enviar Mensagem"
                  ) : (
                    statusSendEmail
                  )
                ) : (
                  <div className="flex items-center justify-center w-full p-6">
                    <div className="relative size-8">
                      <svg
                        className="animate-spin text-gray-300 size-full"
                        viewBox="0 0 103 103"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="51.5"
                          cy="51.5"
                          r="45"
                          stroke="currentColor"
                          strokeWidth={10}
                          strokeLinecap="round"
                          className="opacity-50"
                        />
                        <path
                          d="M51.5 6C58.8 6 66.0 7.7 72.6 11C79.2 14.3 84.7 19.7 88.5 26.3C92.3 32.9 94.4 40.5 94.4 48.5"
                          stroke="currentColor"
                          strokeWidth={10}
                          strokeLinecap="round"
                          className="text-gray-100"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
