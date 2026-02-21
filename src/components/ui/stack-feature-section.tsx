"use client";

import {
  FaReact, FaAws, FaDocker, FaNodeJs, FaGithub,
  FaTwitter, FaLinkedin, FaInstagram, FaGoogle, FaApple
} from "react-icons/fa";
import {
  SiNextdotjs, SiVercel, SiRedux, SiTypescript, SiFacebook
} from "react-icons/si";

const iconConfigs = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiNextdotjs, color: "#ffffff" },
  { Icon: SiVercel, color: "#ffffff" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaGithub, color: "#ffffff" },
  { Icon: FaTwitter, color: "#1DA1F2" },
  { Icon: FaLinkedin, color: "#0077B5" },
  { Icon: FaInstagram, color: "#E1306C" },
  { Icon: FaGoogle, color: "#DB4437" },
  { Icon: FaApple, color: "#ffffff" },
  { Icon: SiFacebook, color: "#1877F2" },
];

export default function StackFeatureSection() {
  const orbitCount = 3;
  const orbitGap = 6;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <div className="relative w-full h-full flex items-center justify-start overflow-hidden">
      <div className="relative w-[40rem] h-[40rem] translate-x-[30%] flex items-center justify-center">
        {/* Center Circle */}
        <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 shadow-lg flex items-center justify-center">
          <FaReact className="w-10 h-10 text-primary animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        {/* Generate Orbits */}
        {[...Array(orbitCount)].map((_, orbitIdx) => {
          const size = `${10 + orbitGap * (orbitIdx + 1)}rem`;
          const angleStep = (2 * Math.PI) / iconsPerOrbit;

          return (
            <div
              key={orbitIdx}
              className="absolute rounded-full border border-dashed border-muted-foreground/30"
              style={{
                width: size,
                height: size,
                animation: `spin ${16 + orbitIdx * 8}s linear infinite ${orbitIdx % 2 === 0 ? '' : 'reverse'}`,
              }}
            >
              {iconConfigs
                .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                .map((cfg, iconIdx) => {
                  const angle = iconIdx * angleStep;
                  const x = 50 + 50 * Math.cos(angle);
                  const y = 50 + 50 * Math.sin(angle);

                  return (
                    <div
                      key={iconIdx}
                      className="absolute glass-card rounded-full p-2 shadow-md"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                        animation: `spin ${16 + orbitIdx * 8}s linear infinite ${orbitIdx % 2 === 0 ? 'reverse' : ''}`,
                      }}
                    >
                      <cfg.Icon className="w-6 h-6" style={{ color: cfg.color }} />
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export { StackFeatureSection };
