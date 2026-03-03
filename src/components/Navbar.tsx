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
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/brunofernandes"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github size={18} />
        </a>
        <a
          href="https://linkedin.com/in/brunofernandes"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="mailto:bruno@example.com"
          aria-label="Email"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
