import React from 'react';
import { Card } from './ui/card';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    'Gained hands-on experience in manual testing methodologies',
    'Executed comprehensive test cases to ensure software quality',
    'Identified and reported bugs with detailed documentation',
    'Collaborated with development teams to resolve issues',
    'Learned performance testing techniques and tools',
    'Enhanced understanding of software development lifecycle',
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-neon font-jetbrains text-sm tracking-wider mb-4">
            PROFESSIONAL JOURNEY
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card p-8 hover:glow-effect transition-all duration-300">
            <div className="flex items-start space-x-6">
              {/* Company Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Briefcase size={24} className="text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Application Load Testing Intern
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-neon" />
                      <span className="font-semibold text-neon">Maiora</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-tech-blue" />
                      <span className="font-jetbrains text-sm">Oct 14, 2024 - Oct 18, 2024</span>
                    </div>
                  </div>
                  <div className="inline-block bg-neon/10 text-neon px-4 py-2 rounded-full text-sm font-medium">
                    5-Day Intensive Program
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-4 text-tech-blue">
                    Key Learning & Achievements
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {responsibilities.map((responsibility, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors"
                      >
                        <CheckCircle size={16} className="text-neon mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {responsibility}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="bg-gradient-to-r from-neon/10 to-tech-blue/10 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3 gradient-text">
                    Impact & Skills Gained
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    This intensive internship provided valuable exposure to real-world software testing practices. 
                    I developed a strong understanding of quality assurance processes, learned to identify 
                    critical issues in applications, and gained experience working in a professional development 
                    environment. The experience enhanced my attention to detail and reinforced my passion for 
                    creating high-quality software solutions.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Additional Context */}
          <div className="mt-12 text-center">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-neon">
                Ready for New Challenges
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                I'm actively seeking opportunities to apply my technical skills and passion for 
                software development in a dynamic work environment. My internship experience has 
                prepared me to contribute effectively to development teams and tackle complex 
                software challenges.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;