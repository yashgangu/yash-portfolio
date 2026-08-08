import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticleBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
        },

        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 60,
          },

          color: {
            value: ["#2563eb", "#38bdf8", "#9333ea"],
          },

          links: {
            enable: true,
            distance: 150,
            color: "#3b82f6",
            opacity: 0.3,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: {
              min: 2,
              max: 5,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default ParticleBackground;