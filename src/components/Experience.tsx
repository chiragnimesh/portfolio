import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading development of enterprise-level applications, mentoring junior developers, and architecting scalable solutions.',
      achievements: [
        'Architected microservices infrastructure serving 1M+ users',
        'Reduced application load time by 60% through optimization',
        'Mentored team of 5 junior developers',
        'Implemented CI/CD pipeline reducing deployment time by 80%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies and agile methodologies.',
      achievements: [
        'Built 15+ client websites and web applications',
        'Integrated third-party APIs and payment gateways',
        'Improved code quality through test-driven development',
        'Collaborated with cross-functional teams'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Web Agency',
      period: '2019 - 2020',
      description: 'Focused on creating responsive and interactive user interfaces with modern frontend frameworks.',
      achievements: [
        'Developed pixel-perfect responsive designs',
        'Implemented complex animations and interactions',
        'Optimized web performance and accessibility',
        'Collaborated with designers and backend teams'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2018 - 2019',
      description: 'Started career building web applications and learning industry best practices in a fast-paced startup environment.',
      achievements: [
        'Contributed to core product features',
        'Fixed bugs and improved application stability',
        'Learned modern development workflows',
        'Participated in code reviews and pair programming'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-6 md:p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary inline-flex">
                    <Briefcase className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                  <p className="text-lg text-primary font-semibold mb-2">{exp.company}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.period}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
