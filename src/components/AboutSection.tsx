import FadeIn from "./FadeIn";
import profile from "@/data/profile.json";

const SectionTitle = ({ children }: { children: string }) => (
  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
    {children}
  </h2>
);

const AboutSection = () => (
  <section id="about" className="py-24 px-4" aria-label="Sobre mim">
    <div className="container mx-auto max-w-3xl">
      <FadeIn>
        <p className="text-sm font-mono text-primary mb-2 tracking-wider">01.</p>
        <SectionTitle>Sobre mim</SectionTitle>
        <div className="h-px w-16 bg-primary mb-8" role="presentation" />
      </FadeIn>
      {profile.about.paragraphs.map((p, i) => (
        <FadeIn key={i} delay={0.1 * (i + 1)}>
          <p className="text-muted-foreground leading-relaxed mb-4 text-base md:text-lg">
            {p}
          </p>
        </FadeIn>
      ))}
    </div>
  </section>
);

export default AboutSection;
