import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Code, Zap, Award } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { useState } from 'react';

const Hero = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({ threshold: 0.3 });
  const [clickedPlanet, setClickedPlanet] = useState<number | null>(null);
  
  const yearsCount = useCountUp({ end: 2, duration: 2000, isVisible: statsVisible });
  const projectsCount = useCountUp({ end: 15, duration: 2500, isVisible: statsVisible });
  const techCount = useCountUp({ end: 10, duration: 2000, isVisible: statsVisible });

  const handlePlanetClick = (planetIndex: number) => {
    setClickedPlanet(planetIndex);
    setTimeout(() => setClickedPlanet(null), 600);
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Add your resume download logic here
    console.log('Download resume');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 lg:px-8 overflow-hidden pt-16">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,70%,5%)] via-[hsl(230,60%,8%)] to-background">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Orbital System - Horizontal Elliptical Orbits with Moving Planets */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-50 group/orbits">
        {/* Orbit 1 */}
        <div className="absolute" style={{ width: '400px', height: '200px' }}>
          <svg className="w-full h-full">
            <ellipse
              cx="200"
              cy="100"
              rx="190"
              ry="90"
              fill="none"
              stroke="hsl(var(--primary) / 0.3)"
              strokeWidth="1.5"
              strokeDasharray="8,4"
            />
          </svg>
          <div 
            onClick={() => handlePlanetClick(1)}
            className={`absolute planet-realistic cursor-pointer hover:scale-110 transition-all group-hover/orbits:[animation-play-state:paused] ${clickedPlanet === 1 ? 'animate-ping' : ''}`} 
            style={{ 
              animation: 'ellipseOrbit1 8s linear infinite, planetSpin 3s linear infinite',
              width: '24px',
              height: '24px',
              background: 'radial-gradient(circle at 30% 30%, hsl(var(--primary)), hsl(var(--primary) / 0.6))',
              boxShadow: '0 0 30px hsl(var(--primary) / 0.8), inset -5px -5px 10px rgba(0,0,0,0.3)'
            }}
          ></div>
        </div>

        {/* Orbit 2 */}
        <div className="absolute" style={{ width: '600px', height: '300px' }}>
          <svg className="w-full h-full">
            <ellipse
              cx="300"
              cy="150"
              rx="290"
              ry="140"
              fill="none"
              stroke="hsl(var(--accent) / 0.25)"
              strokeWidth="1.5"
              strokeDasharray="8,4"
            />
          </svg>
          <div 
            onClick={() => handlePlanetClick(2)}
            className={`absolute planet-realistic cursor-pointer hover:scale-110 transition-all group-hover/orbits:[animation-play-state:paused] ${clickedPlanet === 2 ? 'animate-ping' : ''}`}
            style={{ 
              animation: 'ellipseOrbit2 12s linear infinite, planetSpin 4s linear infinite',
              width: '20px',
              height: '20px',
              background: 'radial-gradient(circle at 30% 30%, hsl(var(--accent)), hsl(var(--accent) / 0.5))',
              boxShadow: '0 0 25px hsl(var(--accent) / 0.8), inset -4px -4px 8px rgba(0,0,0,0.3)'
            }}
          ></div>
        </div>

        {/* Orbit 3 */}
        <div className="absolute" style={{ width: '800px', height: '400px' }}>
          <svg className="w-full h-full">
            <ellipse
              cx="400"
              cy="200"
              rx="390"
              ry="190"
              fill="none"
              stroke="hsl(var(--primary) / 0.2)"
              strokeWidth="1.5"
              strokeDasharray="8,4"
            />
          </svg>
          <div 
            onClick={() => handlePlanetClick(3)}
            className={`absolute planet-realistic cursor-pointer hover:scale-110 transition-all group-hover/orbits:[animation-play-state:paused] ${clickedPlanet === 3 ? 'animate-ping' : ''}`}
            style={{ 
              animation: 'ellipseOrbit3 16s linear infinite, planetSpin 5s linear infinite',
              width: '28px',
              height: '28px',
              background: 'radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.9), hsl(var(--primary) / 0.4))',
              boxShadow: '0 0 35px hsl(var(--primary) / 0.7), inset -6px -6px 12px rgba(0,0,0,0.3)'
            }}
          ></div>
        </div>

        {/* Orbit 4 */}
        <div className="absolute" style={{ width: '1000px', height: '500px' }}>
          <svg className="w-full h-full">
            <ellipse
              cx="500"
              cy="250"
              rx="490"
              ry="240"
              fill="none"
              stroke="hsl(var(--secondary) / 0.18)"
              strokeWidth="1.5"
              strokeDasharray="8,4"
            />
          </svg>
          <div 
            onClick={() => handlePlanetClick(4)}
            className={`absolute planet-realistic cursor-pointer hover:scale-110 transition-all group-hover/orbits:[animation-play-state:paused] ${clickedPlanet === 4 ? 'animate-ping' : ''}`}
            style={{ 
              animation: 'ellipseOrbit4 20s linear infinite, planetSpin 3.5s linear infinite',
              width: '22px',
              height: '22px',
              background: 'radial-gradient(circle at 30% 30%, hsl(var(--secondary)), hsl(var(--secondary) / 0.5))',
              boxShadow: '0 0 28px hsl(var(--secondary) / 0.7), inset -5px -5px 10px rgba(0,0,0,0.3)'
            }}
          ></div>
        </div>

        {/* Orbit 5 */}
        <div className="absolute" style={{ width: '1200px', height: '600px' }}>
          <svg className="w-full h-full">
            <ellipse
              cx="600"
              cy="300"
              rx="590"
              ry="290"
              fill="none"
              stroke="hsl(var(--primary) / 0.15)"
              strokeWidth="1.5"
              strokeDasharray="8,4"
            />
          </svg>
          <div 
            onClick={() => handlePlanetClick(5)}
            className={`absolute planet-realistic cursor-pointer hover:scale-110 transition-all group-hover/orbits:[animation-play-state:paused] ${clickedPlanet === 5 ? 'animate-ping' : ''}`}
            style={{ 
              animation: 'ellipseOrbit5 24s linear infinite, planetSpin 4.5s linear infinite',
              width: '26px',
              height: '26px',
              background: 'radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.8), hsl(var(--primary) / 0.4))',
              boxShadow: '0 0 32px hsl(var(--primary) / 0.6), inset -5px -5px 10px rgba(0,0,0,0.3)'
            }}
          ></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping opacity-60"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-4rem)]">
          {/* LEFT SIDE - Text Content */}
          <div className="space-y-8 animate-[fade-in_0.8s_ease-out_forwards] opacity-0">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">
                Backend Developer | Java | Spring Boot | Angular
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-[fade-in_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.2s' }}>
                  Chirag
                </span>
              </h1>

              {/* Subheading */}
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground/90 leading-relaxed animate-[fade-in_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.4s' }}>
                I build scalable backend systems and seamless digital experiences.
              </h2>

              {/* Description */}
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-[fade-in_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.6s' }}>
                Specializing in microservices architecture, high-performance APIs, and modern backend solutions. 
                Transforming complex business requirements into elegant, production-ready code.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-[fade-in_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.8s' }}>
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="group relative overflow-hidden bg-[#1a1a1a] hover:bg-[#2a2a2a] dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-primary-foreground px-8 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
                  View Projects
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>

              <Button
                onClick={handleDownloadResume}
                size="lg"
                variant="outline"
                className="group border-2 border-primary/50 hover:border-primary bg-transparent hover:bg-primary/10 text-primary px-8 py-6 text-lg rounded-xl shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <Download className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                  Download Resume
                </span>
              </Button>
            </div>

            {/* Animated Stats */}
            <div 
              ref={statsRef}
              className={`grid grid-cols-3 gap-6 pt-8 border-t border-primary/20 transition-all duration-1000 ${
                statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-4xl font-bold text-primary mb-1">
                  {yearsCount}+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Code className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-4xl font-bold text-primary mb-1">
                  {projectsCount}+
                </div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              
              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-4xl font-bold text-primary mb-1">
                  {techCount}+
                </div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - 3D Animated Cube */}
          <div className="flex items-center justify-center lg:justify-end animate-[fade-in_1.2s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Cube Container */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1000px' }}>
                <div className="relative w-64 h-64 lg:w-80 lg:h-80" style={{
                  transformStyle: 'preserve-3d',
                  animation: 'rotateCube 20s infinite linear'
                }}>
                  {/* Cube Faces */}
                  {[
                    { transform: 'rotateY(0deg) translateZ(160px)', delay: '0s' },
                    { transform: 'rotateY(90deg) translateZ(160px)', delay: '0.1s' },
                    { transform: 'rotateY(180deg) translateZ(160px)', delay: '0.2s' },
                    { transform: 'rotateY(-90deg) translateZ(160px)', delay: '0.3s' },
                    { transform: 'rotateX(90deg) translateZ(160px)', delay: '0.4s' },
                    { transform: 'rotateX(-90deg) translateZ(160px)', delay: '0.5s' }
                  ].map((face, index) => (
                    <div
                      key={index}
                      className="absolute inset-0 border-2 border-primary/40 bg-primary/5 backdrop-blur-sm"
                      style={{
                        transform: face.transform,
                        animation: `cubeFacePulse 3s ease-in-out infinite`,
                        animationDelay: face.delay,
                        boxShadow: '0 0 30px rgba(var(--primary-rgb), 0.3), inset 0 0 30px rgba(var(--primary-rgb), 0.1)'
                      }}
                    >
                      {/* Corner dots */}
                      <div className="absolute top-2 left-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-2 left-2 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute bottom-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                      
                      {/* Center glow */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-primary/60 rounded-full blur-md animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-2xl animate-pulse"></div>
              
              {/* Orbiting Particles */}
              <div className="absolute inset-0" style={{ animation: 'orbit 15s linear infinite' }}>
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)]"></div>
              </div>
              <div className="absolute inset-0" style={{ animation: 'orbit 15s linear infinite reverse', animationDelay: '7.5s' }}>
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary/60 rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.6)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .planet-realistic {
          border-radius: 50%;
          position: absolute;
        }

        @keyframes planetSpin {
          0% { 
            filter: brightness(1) hue-rotate(0deg);
          }
          50% {
            filter: brightness(1.2) hue-rotate(10deg);
          }
          100% { 
            filter: brightness(1) hue-rotate(0deg);
          }
        }

        @keyframes rotateCube {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }

        @keyframes cubeFacePulse {
          0%, 100% { 
            border-color: hsl(var(--primary) / 0.4);
            background-color: hsl(var(--primary) / 0.05);
          }
          50% { 
            border-color: hsl(var(--primary) / 0.7);
            background-color: hsl(var(--primary) / 0.1);
          }
        }

        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(200px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
        }

        @keyframes ellipseOrbit1 {
          0% { 
            left: 50%;
            top: 0%;
            transform: translate(-50%, -50%);
          }
          25% { 
            left: 100%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          50% { 
            left: 50%;
            top: 100%;
            transform: translate(-50%, -50%);
          }
          75% { 
            left: 0%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          100% { 
            left: 50%;
            top: 0%;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes ellipseOrbit2 {
          0% { 
            left: 50%;
            top: 0%;
            transform: translate(-50%, -50%);
          }
          25% { 
            left: 100%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          50% { 
            left: 50%;
            top: 100%;
            transform: translate(-50%, -50%);
          }
          75% { 
            left: 0%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          100% { 
            left: 50%;
            top: 0%;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes ellipseOrbit3 {
          0% { 
            left: 50%;
            top: 0%;
            transform: translate(-50%, -50%);
          }
          25% { 
            left: 100%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          50% { 
            left: 50%;
            top: 100%;
            transform: translate(-50%, -50%);
          }
          75% { 
            left: 0%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          100% { 
            left: 50%;
            top: 0%;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes ellipseOrbit4 {
          0% { 
            left: 50%;
            top: 0%;
            transform: translate(-50%, -50%);
          }
          25% { 
            left: 100%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          50% { 
            left: 50%;
            top: 100%;
            transform: translate(-50%, -50%);
          }
          75% { 
            left: 0%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          100% { 
            left: 50%;
            top: 0%;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes ellipseOrbit5 {
          0% { 
            left: 50%;
            top: 0%;
            transform: translate(-50%, -50%);
          }
          25% { 
            left: 100%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          50% { 
            left: 50%;
            top: 100%;
            transform: translate(-50%, -50%);
          }
          75% { 
            left: 0%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          100% { 
            left: 50%;
            top: 0%;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
