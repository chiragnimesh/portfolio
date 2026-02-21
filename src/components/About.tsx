import { User, Target, Heart } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import StackFeatureSection from './ui/stack-feature-section';

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" className="relative py-10 px-4 lg:px-8 overflow-hidden">
      {/* Orbit Animation - absolute right edge */}
      <div 
        className={`absolute -right-20 -top-10 -bottom-10 w-[700px] lg:w-[900px] transition-all duration-1000 delay-500 ${
          cardsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <StackFeatureSection />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating elegant solutions to complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start lg:max-w-[70%]">
          {/* Left side - Who I Am */}
          <div 
            ref={contentRef}
            className={`glass-card p-8 rounded-2xl transition-all duration-1000 delay-200 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I'm a dedicated Full Stack Developer with a passion for building robust and scalable web applications. 
              With expertise in modern technologies and frameworks, I create solutions that make a difference.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in software development has been driven by curiosity and a commitment to continuous learning. 
              I thrive on challenges and enjoy collaborating with teams to deliver exceptional results.
            </p>
          </div>

          {/* Right side - Cards */}
          <div 
            ref={cardsRef}
            className="space-y-4"
          >
            <div 
              className={`glass-card p-5 rounded-xl hover:scale-105 transition-all duration-300 group ${
                cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: cardsVisible ? '300ms' : '0ms' }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">Professional</h4>
                  <p className="text-sm text-muted-foreground">
                    Committed to delivering high-quality code
                  </p>
                </div>
              </div>
            </div>

            <div 
              className={`glass-card p-5 rounded-xl hover:scale-105 transition-all duration-300 group ${
                cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: cardsVisible ? '500ms' : '0ms' }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">Goal-Oriented</h4>
                  <p className="text-sm text-muted-foreground">
                    Focused on achieving results
                  </p>
                </div>
              </div>
            </div>

            <div 
              className={`glass-card p-5 rounded-xl hover:scale-105 transition-all duration-300 group ${
                cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: cardsVisible ? '700ms' : '0ms' }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">Passionate</h4>
                  <p className="text-sm text-muted-foreground">
                    Love what I do in every project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
