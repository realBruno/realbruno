const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-4" role="contentinfo">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {year} Bruno Fernandes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
