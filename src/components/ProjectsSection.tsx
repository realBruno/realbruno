import FadeIn from "./FadeIn";
import { Github, ExternalLink, Star } from "lucide-react";
import projects from "@/data/projects.json";

interface Project {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  highlight: boolean;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div
    className={`relative rounded-lg border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 ${
      project.highlight ? "border-primary/30 ring-1 ring-primary/10" : "border-border"
    }`}
  >
    {project.highlight && (
      <div className="flex items-center gap-1.5 text-primary text-xs font-mono mb-3">
        <Star size={14} />
        <span>Projeto em destaque</span>
      </div>
    )}
    <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.stack.map((tech) => (
        <span
          key={tech}
          className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex items-center gap-3">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Código fonte de ${project.title}`}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Github size={18} />
      </a>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Demo de ${project.title}`}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink size={18} />
        </a>
      )}
    </div>
  </div>
);

const ProjectsSection = () => {
  const sorted = [...(projects as Project[])].sort(
    (a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0)
  );

  return (
    <section id="projects" className="py-24 px-4" aria-label="Projetos">
      <div className="container mx-auto max-w-5xl">
        <FadeIn>
          <p className="text-sm font-mono text-primary mb-2 tracking-wider">02.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Projetos
          </h2>
          <div className="h-px w-16 bg-primary mb-10" role="presentation" />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          {sorted.map((project, i) => (
            <FadeIn key={project.title} delay={0.1 * i}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
