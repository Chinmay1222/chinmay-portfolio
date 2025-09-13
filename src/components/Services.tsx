import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Palette, Globe, ArrowRight, Sparkles, Code2, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually compelling user interfaces that provide exceptional user experiences.',
      features: [
        'User-centered design approach',
        'Wireframing and prototyping',
        'Responsive design systems',
        'Accessibility compliance',
      ],
      color: 'neon',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Building responsive, fast, and aesthetically modern websites using cutting-edge technologies.',
      features: [
        'Modern web frameworks',
        'Performance optimization',
        'SEO-friendly architecture',
        'Cross-browser compatibility',
      ],
      color: 'tech-blue',
    },
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Developing custom software solutions tailored to specific business needs and requirements.',
      features: [
        'Full-stack development',
        'Database design & integration',
        'API development',
        'Testing & quality assurance',
      ],
      color: 'tech-purple',
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-neon font-jetbrains text-sm tracking-wider mb-4">
            WHAT I OFFER
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Comprehensive digital solutions combining technical expertise with creative vision
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="glass-card p-8 text-center hover:glow-effect transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:animate-float shadow-lg">
                    <Icon size={24} className="text-primary-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-neon transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center justify-center space-x-2 text-sm text-muted-foreground"
                      >
                        <Sparkles size={12} className="text-neon" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="border-neon text-neon hover:bg-neon hover:text-neon-foreground group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mt-16">
          <Card className="glass-card p-8 max-w-4xl mx-auto text-center">
            <Smartphone size={48} className="mx-auto mb-6 text-tech-blue" />
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Custom Solutions
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Every project is unique, and I'm passionate about creating custom solutions 
              that perfectly match your specific requirements. From concept to deployment, 
              I ensure quality, performance, and user satisfaction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-secondary/20 px-4 py-2 rounded-full text-sm text-muted-foreground">
                💡 Consultation
              </div>
              <div className="bg-secondary/20 px-4 py-2 rounded-full text-sm text-muted-foreground">
                🎨 Design
              </div>
              <div className="bg-secondary/20 px-4 py-2 rounded-full text-sm text-muted-foreground">
                ⚡ Development
              </div>
              <div className="bg-secondary/20 px-4 py-2 rounded-full text-sm text-muted-foreground">
                🚀 Deployment
              </div>
              <div className="bg-secondary/20 px-4 py-2 rounded-full text-sm text-muted-foreground">
                🔧 Support
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;