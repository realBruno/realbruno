import FadeIn from "./FadeIn";
import profile from "@/data/profile.json";

const TechnologiesSection = () => {
  const categories = Object.entries(profile.technologies);

  return (
    <section id="technologies" className="py-24 px-4" aria-label="Tecnologias">
      <div className="container mx-auto max-w-5xl">
        <FadeIn>
          <p className="text-sm font-mono text-primary mb-2 tracking-wider">03.</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Tecnologias
          </h2>
          <div className="h-px w-16 bg-primary mb-10" role="presentation" />
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, techs], i) => (
            <FadeIn key={category} delay={0.1 * i}>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-sm font-mono text-primary mb-4 tracking-wider">
                  {category}
                </h3>
                <ul className="space-y-2" role="list">
                  {techs.map((tech) => (
                    <li
                      key={tech}
                      className="text-muted-foreground text-sm flex items-center gap-2"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
