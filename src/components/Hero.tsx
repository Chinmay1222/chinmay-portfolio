import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Code, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import profileImage from '../components/profile.jpg';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
      {/* Dynamic Gradient Orbs */}
      <div 
        className="absolute w-96 h-96 bg-gradient-glow opacity-40 blur-3xl transition-transform duration-1000 ease-out"
        style={{
          top: `${20 + mousePosition.y * 0.02}%`,
          left: `${20 + mousePosition.x * 0.02}%`,
        }}
      ></div>
      <div 
        className="absolute w-80 h-80 bg-gradient-to-r from-tech-blue/30 to-tech-purple/30 opacity-30 blur-3xl transition-transform duration-1000 ease-out"
        style={{
          bottom: `${20 - mousePosition.y * 0.015}%`,
          right: `${20 - mousePosition.x * 0.015}%`,
        }}
      ></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon rounded-full opacity-20 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Enhanced Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full text-sm">
              <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">Available for opportunities</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-neon font-jetbrains text-sm tracking-[0.2em] uppercase flex items-center space-x-2">
                  <Sparkles size={14} className="animate-pulse" />
                  <span>Hello, I'm</span>
                </p>
                
                {/* Enhanced Name with Stagger Animation */}
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <div className="overflow-hidden">
                    <span className="gradient-text inline-block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                      Chinmay
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-foreground inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      S H
                    </span>
                  </div>
                </h1>
              </div>

              {/* Animated Role Tags */}
              <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
                  <Code size={16} className="text-tech-blue" />
                  <span className="text-tech-blue font-medium">Computer Science Professional</span>
                </div>
                <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
                  <Zap size={16} className="text-neon" />
                  <span className="text-neon font-medium">Passionate Developer</span>
                </div>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Combining <span className="text-tech-blue font-semibold">coding</span> and{' '}
                <span className="text-neon font-semibold">creativity</span> to develop smart, efficient software solutions.
              </p>
              <p className="text-lg text-muted-foreground/80 max-w-xl leading-relaxed">
                Passionate about building innovative applications that solve real-world problems 
                and make a meaningful impact.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-primary hover:shadow-lg hover:shadow-neon/50 transition-all duration-300 px-8 py-6 text-lg group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>View My Work</span>
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform rotate-45" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon/20 to-tech-blue/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-neon/50 text-neon hover:bg-neon hover:text-background px-8 py-6 text-lg transition-all duration-300 group relative overflow-hidden backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Contact Me</span>
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                </span>
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <span className="text-muted-foreground text-sm font-medium">Connect with me:</span>
              <div className="flex items-center space-x-3">
                <a
                  href="mailto:chinmaysh075@gmail.com"
                  className="group relative p-3 glass-card rounded-xl hover:glow-effect transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} className="text-muted-foreground group-hover:text-neon transition-colors" />
                  <div className="absolute inset-0 bg-neon/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
                <a
                  href="#"
                  className="group relative p-3 glass-card rounded-xl hover:glow-effect transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-muted-foreground group-hover:text-tech-blue transition-colors" />
                  <div className="absolute inset-0 bg-tech-blue/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
                <a
                  href="#"
                  className="group relative p-3 glass-card rounded-xl hover:glow-effect transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-muted-foreground group-hover:text-tech-purple transition-colors" />
                  <div className="absolute inset-0 bg-tech-purple/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              {/* Multiple Glow Layers */}
              {/* <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-pulse-glow"></div> */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-neon/20 to-tech-blue/20 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div> */}
              
              {/* Main Card */}
              <div className="relative glass-card p-8 rounded-3xl group-hover:scale-105 transition-transform duration-500">
                {/* Decorative Elements */}
                {/* <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-neon rounded-full animate-pulse"></div> */}
                {/* <div className="absolute -top-2 -right-2 w-4 h-4 bg-tech-blue rounded-full animate-float" style={{ animationDelay: '1s' }}></div> */}
                {/* <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-tech-purple rounded-full animate-float" style={{ animationDelay: '2s' }}></div> */}
                
                {/* Profile Image */}
                <div className="relative overflow-hidden rounded-2xl z-20">
                  <img
                    src={profileImage}
                    alt="Chinmay S H - Profile"
                    className="w-80 h-80 object-cover"
                  />
                  
                  {/* Overlay Effects */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                  
                  {/* Tech Icons Overlay */}
                  {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex space-x-4">
                      <div className="w-8 h-8 bg-neon/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Code size={16} className="text-neon" />
                      </div>
                      <div className="w-8 h-8 bg-tech-blue/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Zap size={16} className="text-tech-blue" />
                      </div>
                    </div>
                  </div> */}
                </div>
                
                {/* Floating Badge */}
                {/* <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-primary rounded-2xl animate-float flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-2xl">🚀</span>
                </div> */}
                
                {/* Achievement Badges */}
                {/* <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="glass-card px-3 py-2 rounded-lg text-xs font-medium text-neon">
                    B.E Student
                  </div>
                  <div className="glass-card px-3 py-2 rounded-lg text-xs font-medium text-tech-blue">
                    Python Dev
                  </div>
                </div> */}
              </div>
              {/* Orbiting Elements */}
              {/* <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-8 w-3 h-3 bg-neon rounded-full animate-float opacity-60" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className="absolute top-3/4 -right-8 w-2 h-2 bg-tech-blue rounded-full animate-float opacity-60" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                <div className="absolute bottom-1/4 -left-4 w-2 h-2 bg-tech-purple rounded-full animate-float opacity-60" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-neon transition-colors p-2"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;