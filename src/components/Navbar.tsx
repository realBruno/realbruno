import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Tecnologias", href: "#technologies" },
  { label: "Contato", href: "#contact" },
];

const Navbar = () => (
  <nav
    className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    role="navigation"
    aria-label="Navegação principal"
  >
    <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
      <a href="#" className="text-lg font-semibold text-foreground tracking-tight">
        BF<span className="text-primary">.</span>
      </a>
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm relative pb-1 text-muted-foreground hover:text-foreground transition-colors duration-300
             after:absolute after:left-1/2 after:bottom-0
             after:h-[2px] after:w-0
             after:bg-primary
             after:transition-all after:duration-300
             after:-translate-x-1/2
             hover:after:w-full"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/realBruno"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-2 rounded-full text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-md hover:shadow-primary/30"
        >
          <Github size={18} />
        </a>
        <a
          href="https://linkedin.com/in/real-bruno"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-2 rounded-full text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-md hover:shadow-primary/30"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="mailto:eusantosbruno@gmail.com"
          aria-label="Email"
          className="p-2 rounded-full text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-md hover:shadow-primary/30"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
