import Header from '@/components/Header';
import { FloatingIconsHero } from '@/components/ui/floating-icons-hero-section';
import TrustedBy from '@/components/TrustedBy';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Import all icons
import intellijIcon from '@/assets/icons/intellij.png';
import springBootIcon from '@/assets/icons/spring-boot.png';
import postmanIcon from '@/assets/icons/postman.png';
import aiIcon from '@/assets/icons/ai.png';
import css3Icon from '@/assets/icons/css3.png';
import dockerIcon from '@/assets/icons/docker.png';
import firebaseIcon from '@/assets/icons/firebase.png';
import githubIcon from '@/assets/icons/github.png';
import googleIcon from '@/assets/icons/google.png';
import vscodeIcon from '@/assets/icons/vscode.png';
import javaIcon from '@/assets/icons/java.png';
import jiraIcon from '@/assets/icons/jira.png';
import mysqlIcon from '@/assets/icons/mysql.png';
import nodejsIcon from '@/assets/icons/nodejs.png';
import reactIcon from '@/assets/icons/react.png';
import sqlIcon from '@/assets/icons/sql.png';

const portfolioIcons = [
  { id: 1, iconSrc: googleIcon, className: 'top-[10%] left-[10%]' },
  { id: 2, iconSrc: githubIcon, className: 'top-[20%] right-[8%]' },
  { id: 3, iconSrc: javaIcon, className: 'top-[80%] left-[10%]' },
  { id: 4, iconSrc: reactIcon, className: 'bottom-[10%] right-[10%]' },
  { id: 5, iconSrc: springBootIcon, className: 'top-[5%] left-[30%]' },
  { id: 6, iconSrc: dockerIcon, className: 'top-[5%] right-[30%]' },
  { id: 7, iconSrc: vscodeIcon, className: 'bottom-[8%] left-[25%]' },
  { id: 8, iconSrc: firebaseIcon, className: 'top-[40%] left-[15%]' },
  { id: 9, iconSrc: postmanIcon, className: 'top-[75%] right-[25%]' },
  { id: 10, iconSrc: mysqlIcon, className: 'top-[90%] left-[70%]' },
  { id: 11, iconSrc: nodejsIcon, className: 'top-[50%] right-[5%]' },
  { id: 12, iconSrc: intellijIcon, className: 'top-[55%] left-[5%]' },
  { id: 13, iconSrc: css3Icon, className: 'top-[5%] left-[55%]' },
  { id: 14, iconSrc: jiraIcon, className: 'bottom-[5%] right-[45%]' },
  { id: 15, iconSrc: aiIcon, className: 'top-[25%] right-[20%]' },
  { id: 16, iconSrc: sqlIcon, className: 'top-[60%] left-[30%]' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section id="home">
          <FloatingIconsHero
            title="Chirag Singla"
            subtitle="Full Stack Developer crafting innovative digital experiences with modern technologies and creative solutions"
            ctaText="View My Work"
            ctaHref="#projects"
            icons={portfolioIcons}
          />
        </section>
        <TrustedBy />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
