import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative border-t border-glass-border">
      <div className="absolute inset-0 bg-gradient-mesh opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <span className="font-jetbrains font-semibold text-lg gradient-text">
                Chinmay S H
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Aspiring Computer Science Professional
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <a
                href="mailto:chinmaysh075@gmail.com"
                className="p-3 glass-card rounded-lg hover:glow-effect transition-all duration-300 text-muted-foreground hover:text-neon"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="#"
                className="p-3 glass-card rounded-lg hover:glow-effect transition-all duration-300 text-muted-foreground hover:text-neon"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-3 glass-card rounded-lg hover:glow-effect transition-all duration-300 text-muted-foreground hover:text-neon"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              Let's connect and create something amazing together
            </p>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-neon text-neon hover:bg-neon hover:text-neon-foreground mb-4"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to Top
            </Button>
            <p className="text-muted-foreground text-sm">
              Thanks for visiting my portfolio
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-glass-border text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center space-x-2">
            <span>© {currentYear} Chinmay S H. Made with</span>
            <Heart size={14} className="text-neon animate-pulse" />
            <span>and lots of coffee ☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;