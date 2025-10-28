import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    Product: [
      { label: "Features", path: "/services" },
      { label: "Solutions", path: "/services" },
      { label: "Pricing", path: "/contact" },
    ],
    Company: [
      { label: "About", path: "/about" },
      { label: "Careers", path: "/about" },
      { label: "Contact", path: "/contact" },
    ],
    Resources: [
      { label: "Blog", path: "/" },
      { label: "Documentation", path: "/" },
      { label: "Support", path: "/contact" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg glow-primary" />
              <span className="text-2xl font-bold text-gradient">XarkaAI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming businesses with cutting-edge AI solutions.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-foreground">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} XarkaAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
