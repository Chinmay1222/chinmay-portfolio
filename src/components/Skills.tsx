import React from 'react';
import { Card } from './ui/card';
import { Code, Database, Wrench, Lightbulb, Users, Target } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: 'Languages',
      icon: Code,
      skills: ['Python', 'HTML', 'CSS', 'JavaScript'],
      color: 'neon',
    },
    {
      category: 'Databases',
      icon: Database,
      skills: ['MySQL'],
      color: 'tech-blue',
    },
    {
      category: 'Tools',
      icon: Wrench,
      skills: ['GitHub', 'VSCode', 'MS Excel'],
      color: 'tech-purple',
    },
  ];

  const softSkills = [
    {
      name: 'Problem Solving',
      icon: Target,
      description: 'Analytical thinking and creative solution development',
    },
    {
      name: 'Team Collaboration',
      icon: Users,
      description: 'Effective communication and teamwork abilities',
    },
    {
      name: 'Innovation',
      icon: Lightbulb,
      description: 'Creative approach to technology and development',
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-neon font-jetbrains text-sm tracking-wider mb-4">
            MY EXPERTISE
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-tech-blue">
            Technical Skills
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {technicalSkills.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="glass-card p-8 text-center hover:glow-effect transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:animate-pulse-glow`}>
                    <Icon size={24} className="text-primary-foreground" />
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-6 text-foreground">
                    {category.category}
                  </h4>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-secondary/20 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:text-neon hover:bg-secondary/30 transition-colors"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-neon">
            Soft Skills
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={index}
                  className="glass-card p-8 text-center hover:glow-effect transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-neon to-tech-blue flex items-center justify-center group-hover:animate-float">
                    <Icon size={24} className="text-background" />
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-4 text-foreground">
                    {skill.name}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Skills Visualization */}
        <div className="mt-16 text-center">
          <Card className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              Continuous Learning
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I believe in continuous learning and staying updated with the latest technologies. 
              Currently exploring advanced web development frameworks, machine learning concepts, 
              and cloud computing platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Node.js', 'Docker', 'AWS', 'MongoDB', 'TypeScript'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-full text-sm font-medium hover:shadow-lg hover:shadow-neon/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;