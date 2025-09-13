import React from 'react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toasts';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'chinmaysh075@gmail.com',
      href: 'mailto:chinmaysh075@gmail.com',
      color: 'neon',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9741597550',
      href: 'tel:+919741597550',
      color: 'tech-blue',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: '#',
      color: 'tech-purple',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my code',
      href: '#',
      color: 'neon',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-neon font-jetbrains text-sm tracking-wider mb-4">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Ready to discuss your next project or just want to say hello? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-tech-blue">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with 
                amazing people. Whether you have a project in mind, need consultation, 
                or just want to chat about technology, feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="glass-card p-6 hover:glow-effect transition-all duration-300 group"
                  >
                    <a
                      href={info.href}
                      className="flex items-center space-x-4"
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:animate-float`}>
                        <Icon size={20} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-neon transition-colors">
                          {info.label}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>

            {/* Location */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon to-tech-blue flex items-center justify-center">
                  <MapPin size={20} className="text-background" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground text-sm">Sullia, Karnataka, India</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-secondary/20 border-glass-border focus:border-neon"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-secondary/20 border-glass-border focus:border-neon"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-secondary/20 border-glass-border focus:border-neon resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:shadow-lg hover:shadow-neon/50 transition-all duration-300 group"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-sm">
                Usually respond within 24 hours
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;