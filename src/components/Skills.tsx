import { Code2, Database, Server, Smartphone, Globe, Braces } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.1 });
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      color: 'primary',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML5', 'CSS3']
    },
    {
      icon: Server,
      title: 'Backend',
      color: 'secondary',
      skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
      icon: Database,
      title: 'Database',
      color: 'accent',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase', 'Firebase']
    },
    {
      icon: Globe,
      title: 'DevOps',
      color: 'highlight',
      skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux', 'Nginx']
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      color: 'primary',
      skills: ['React Native', 'Responsive Design', 'PWA', 'Mobile-First', 'iOS', 'Android']
    },
    {
      icon: Braces,
      title: 'Tools',
      color: 'secondary',
      skills: ['VS Code', 'Postman', 'Figma', 'Jira', 'Slack', 'GitHub']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: gridVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-${category.color}/10 text-${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm rounded-full bg-background/50 text-foreground border border-border hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
