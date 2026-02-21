import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Technical University',
      period: '2014 - 2018',
      description: 'Specialized in software engineering, algorithms, and web technologies.',
      achievements: [
        'Graduated with First Class Honors',
        'Final year project on Machine Learning',
        'Active member of coding club',
        'Won hackathon competition'
      ]
    },
    {
      degree: 'Full Stack Web Development',
      institution: 'Online Certification Program',
      period: '2019',
      description: 'Comprehensive program covering modern web development technologies and practices.',
      achievements: [
        'Completed 500+ hours of coursework',
        'Built 10+ real-world projects',
        'Learned MERN stack development',
        'Certification with distinction'
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023'
    },
    {
      title: 'Professional Scrum Master',
      issuer: 'Scrum.org',
      year: '2022'
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2021'
    },
    {
      title: 'React Advanced Certification',
      issuer: 'Meta',
      year: '2021'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Education & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-6 md:p-8 rounded-2xl hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-4">{edu.period}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>
              <ul className="space-y-2">
                {edu.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass-card p-6 md:p-8 rounded-2xl animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Professional Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border hover:border-primary transition-colors"
              >
                <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
