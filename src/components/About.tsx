import React from 'react';
import { Card } from './ui/card';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const About = () => {
  const education = [
    {
      icon: GraduationCap,
      degree: 'B.E, Computer Science',
      institution: 'KVGCE, Sullia',
      period: '2022 - 2026',
      grade: 'CGPA: 7.3',
      current: true,
    },
    {
      icon: School,
      degree: 'PUC',
      institution: 'GPUC Sullia',
      period: '2020 - 2022',
      grade: '63%',
      current: false,
    },
    {
      icon: BookOpen,
      degree: 'SSLC',
      institution: 'St. Joseph High School, Sullia',
      period: '2020',
      grade: '83%',
      current: false,
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-neon font-jetbrains text-sm tracking-wider mb-4">
            GET TO KNOW ME
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <Card className="glass-card p-8 hover:glow-effect transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-tech-blue">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am an aspiring computer science professional eager to apply programming 
                and problem-solving skills to develop innovative software solutions and grow 
                in a dynamic work environment.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                My passion lies in combining technical expertise with creative thinking to 
                build applications that make a meaningful impact. I enjoy exploring new 
                technologies and continuously learning to stay at the forefront of software 
                development.
              </p>
            </Card>

            <Card className="glass-card p-8 hover:glow-effect transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-neon">
                What Drives Me
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="text-neon mt-1">▶</span>
                  <span>Building innovative software solutions that solve real-world problems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-neon mt-1">▶</span>
                  <span>Exploring cutting-edge technologies and development methodologies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-neon mt-1">▶</span>
                  <span>Combining technical skills with creative design thinking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-neon mt-1">▶</span>
                  <span>Contributing to projects that make a positive impact</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">
              Education
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon to-tech-blue"></div>
              
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <Card
                    key={index}
                    className={`glass-card p-6 ml-16 mb-8 hover:glow-effect transition-all duration-300 ${
                      edu.current ? 'border-neon' : ''
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-10 top-6 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                      <Icon size={20} className="text-primary-foreground" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="text-xl font-semibold text-foreground">
                          {edu.degree}
                        </h4>
                        {edu.current && (
                          <span className="text-xs bg-neon text-neon-foreground px-2 py-1 rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-tech-blue font-medium">{edu.institution}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground font-jetbrains">
                          {edu.period}
                        </span>
                        <span className="text-neon font-semibold">{edu.grade}</span>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;