import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github, Brain, Mic, Shield, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Credit Card Fraud Detection',
      description: 'Web-based system using machine learning algorithms to identify and prevent fraudulent credit card transactions in real-time.',
      icon: Shield,
      technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'Flask', 'HTML/CSS'],
      features: [
        'Real-time fraud detection',
        'Machine learning model integration',
        'Interactive web interface',
        'Data visualization dashboard',
        'High accuracy prediction rates',
      ],
      color: 'neon',
      status: 'Completed',
    },
    {
      title: 'Speech Recognized Billing System',
      description: 'Voice-powered web application that automates the billing process through advanced speech recognition technology.',
      icon: Mic,
      technologies: ['JavaScript', 'Web Speech API', 'HTML5', 'CSS3', 'Local Storage'],
      features: [
        'Voice command processing',
        'Automatic bill generation',
        'Item recognition via speech',
        'Cost calculation automation',
        'User-friendly interface',
      ],
      color: 'tech-blue',
      status: 'Completed',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-neon font-jetbrains text-sm tracking-wider mb-4">
            MY PORTFOLIO
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate technical expertise and creative problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="glass-card p-8 hover:glow-effect transition-all duration-300 group"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:animate-pulse-glow`}>
                      <Icon size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-neon transition-colors">
                        {project.title}
                      </h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        project.status === 'Completed' 
                          ? 'bg-neon/20 text-neon' 
                          : 'bg-tech-blue/20 text-tech-blue'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-tech-blue mb-3 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm text-muted-foreground"
                      >
                        <Zap size={12} className="text-neon" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neon mb-3 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-secondary/20 text-muted-foreground px-3 py-1 rounded-full border border-glass-border hover:border-neon/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-neon text-neon hover:bg-neon hover:text-neon-foreground flex items-center space-x-2"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-background flex items-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass-card p-8 max-w-2xl mx-auto">
            <Brain size={48} className="mx-auto mb-4 text-neon" />
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and exploring innovative technologies. 
              Stay tuned for more exciting developments!
            </p>
            <Button
              className="bg-gradient-primary hover:shadow-lg hover:shadow-neon/50 transition-all duration-300"
            >
              View All Projects on GitHub
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;