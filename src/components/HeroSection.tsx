import FadeIn from "./FadeIn";
import { ArrowDown } from "lucide-react";
import profile from "@/data/profile.json";

const HeroSection = () => (
  <section
    className="min-h-screen flex flex-col items-center justify-center px-4 pt-16"
    aria-label="Apresentação"
  >
    <FadeIn>
      <p className="text-sm font-mono text-primary mb-4 tracking-wider">
        Olá, eu sou
      </p>
    </FadeIn>
    <FadeIn delay={0.1}>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-center">
        {profile.name}
      </h1>
    </FadeIn>
    <FadeIn delay={0.2}>
      <h2 className="text-xl md:text-2xl text-primary font-medium mb-6 text-center">
        {profile.title}
      </h2>
    </FadeIn>
    <FadeIn delay={0.3}>
      <p className="max-w-xl text-center text-muted-foreground text-base md:text-lg leading-relaxed">
        {profile.hero_description}
      </p>
    </FadeIn>
    <FadeIn delay={0.5}>
      <a
        href="#about"
        className="mt-12 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Rolar para seção sobre"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </a>
    </FadeIn>
  </section>
);

export default HeroSection;
