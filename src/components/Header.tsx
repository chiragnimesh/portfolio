import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { AnimatedThemeToggle } from '@/components/ui/animated-theme-toggle';
import { cn } from '@/lib/utils';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import codeIcon from '@/assets/icons/code-logo.png';

type ScrollStage = 'initial' | 'mid' | 'full';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollStage, setScrollStage] = useState<ScrollStage>('initial');

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      const scrollY = window.scrollY;

      // Determine scroll stage
      if (scrollY < 50) {
        setScrollStage('initial');
      } else if (scrollY < 120) {
        setScrollStage('mid');
      } else {
        setScrollStage('full');
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { scrollToElement } = useSmoothScroll();

  const scrollToSection = (href: string) => {
    scrollToElement(href.substring(1), { duration: 1200, offset: 80 });
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          scrollStage === 'initial' && 'bg-transparent',
          scrollStage === 'mid' && 'bg-background/10',
          scrollStage === 'full' && 'bg-transparent'
        )}
      >
        <div
          className={cn(
            'mx-auto transition-all duration-500 ease-in-out border border-transparent',
            scrollStage === 'initial' && 'container px-4 lg:px-8',
            scrollStage === 'mid' && 'container px-4 lg:px-6',
            scrollStage === 'full' && 'max-w-5xl mx-4 lg:mx-auto mt-4 px-4 lg:px-6 bg-background/20 dark:bg-background/40 backdrop-blur-xl rounded-full shadow-lg'
          )}
        >
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-500 ease-in-out',
              scrollStage === 'initial' && 'h-24',
              scrollStage === 'mid' && 'h-20',
              scrollStage === 'full' && 'h-16'
            )}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('#home')}
                className={cn(
                  'flex items-center gap-2 font-bold transition-all duration-300 rounded-full',
                  'hover:bg-background/60 hover:backdrop-blur-md',
                  scrollStage === 'initial' && 'text-xl px-4 py-2',
                  scrollStage === 'mid' && 'text-lg px-3 py-1.5',
                  scrollStage === 'full' && 'text-base px-3 py-1.5'
                )}
              >
                <img 
                  src={codeIcon} 
                  alt="Code" 
                  className={cn(
                    'transition-all duration-300',
                    scrollStage === 'initial' && 'h-8 w-8',
                    scrollStage === 'mid' && 'h-7 w-7',
                    scrollStage === 'full' && 'h-6 w-6'
                  )}
                />
                <span className="text-[#2979FF]">Chirag</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav
              className={cn(
                'hidden md:flex items-center transition-all duration-500 ease-in-out',
                scrollStage === 'initial' && 'space-x-3',
                scrollStage === 'mid' && 'space-x-2',
                scrollStage === 'full' && 'space-x-1'
              )}
            >
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'font-medium transition-all duration-300 rounded-full',
                     'hover:bg-foreground/10 dark:hover:bg-foreground/20 hover:backdrop-blur-md hover:-translate-y-1',
                    scrollStage === 'initial' && 'text-base px-4 py-2',
                    scrollStage === 'mid' && 'text-base px-3 py-1.5',
                    scrollStage === 'full' && 'text-sm px-2.5 py-1.5',
                    activeSection === item.href.substring(1)
                      ? 'text-primary bg-background/40 backdrop-blur-md'
                      : 'text-foreground/80 hover:text-foreground'
                  )}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Social Links & Theme Toggle */}
            <div
              className={cn(
                'hidden md:flex items-center transition-all duration-500 ease-in-out',
                scrollStage === 'initial' && 'space-x-2',
                scrollStage === 'mid' && 'space-x-1.5',
                scrollStage === 'full' && 'space-x-1'
              )}
            >
              <AnimatedThemeToggle className="hover:bg-primary/10 rounded-full transition-all duration-300 text-foreground" />
              <Button
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  'hover:bg-primary/10 hover:backdrop-blur-md rounded-full transition-all duration-300',
                  scrollStage === 'full' && 'h-8 w-8 p-0'
                )}
              >
                <a
                  href="https://github.com/chiragnimesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className={cn(
                    'transition-all duration-300 text-foreground',
                    scrollStage === 'full' ? 'h-4 w-4' : 'h-5 w-5'
                  )} />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  'hover:bg-primary/10 hover:backdrop-blur-md rounded-full transition-all duration-300',
                  scrollStage === 'full' && 'h-8 w-8 p-0'
                )}
              >
                <a
                  href="https://linkedin.com/in/chirag-ab16791a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className={cn(
                    'transition-all duration-300 text-foreground',
                    scrollStage === 'full' ? 'h-4 w-4' : 'h-5 w-5'
                  )} />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="hover:bg-background/60 hover:backdrop-blur-md rounded-full"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-28 bg-background/80 backdrop-blur-xl rounded-2xl border border-border/30 p-4 z-40 animate-fade-in shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'block px-4 py-2.5 text-base font-medium transition-all rounded-xl w-full text-left',
                  'hover:bg-background/60',
                  activeSection === item.href.substring(1)
                    ? 'text-primary bg-background/40'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center space-x-4 px-3 pt-4 border-t border-border/30">
              <AnimatedThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hover:bg-background/60 rounded-full"
              >
                <a
                  href="https://github.com/chiragnimesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hover:bg-background/60 rounded-full"
              >
                <a
                  href="https://linkedin.com/in/chirag-ab16791a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
