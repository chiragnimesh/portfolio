import { Code, Palette, Smartphone, Settings, Cloud, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and scalable web applications using modern frameworks and best practices.',
      features: ['React & Next.js', 'Full Stack Solutions', 'API Integration', 'Performance Optimization']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces that provide exceptional user experiences.',
      features: ['Modern Design', 'Responsive Layouts', 'User-Centered', 'Brand Identity']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications that work seamlessly on iOS and Android.',
      features: ['React Native', 'Cross-Platform', 'Native Features', 'App Store Deploy']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Implementing cloud infrastructure and services for scalable and reliable applications.',
      features: ['AWS & Azure', 'Serverless', 'Database Management', 'Auto-Scaling']
    },
    {
      icon: Settings,
      title: 'API Development',
      description: 'Designing and building robust REST and GraphQL APIs for seamless data communication.',
      features: ['RESTful APIs', 'GraphQL', 'Documentation', 'Authentication']
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      description: 'Ensuring application security and reliability through comprehensive testing strategies.',
      features: ['Security Audits', 'Unit Testing', 'Integration Tests', 'Code Quality']
    }
  ];

  return (
    <section id="services" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
