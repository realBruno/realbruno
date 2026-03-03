import FadeIn from "./FadeIn";
import { Mail, Github, Linkedin } from "lucide-react";
import profile from "@/data/profile.json";

const ContactSection = () => (
  <section id="contact" className="py-24 px-4" aria-label="Contato">
    <div className="container mx-auto max-w-2xl text-center">
      <FadeIn>
        <p className="text-sm font-mono text-primary mb-2 tracking-wider">04.</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Contato
        </h2>
        <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
          Interessado em trabalhar juntos? Sinta-se à vontade para entrar em contato.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${profile.contact.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-primary bg-primary/10 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
          >
            <Mail size={16} />
            Enviar email
          </a>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default ContactSection;
