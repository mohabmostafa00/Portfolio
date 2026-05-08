import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function Particle() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
        },

        background: {
          color: "transparent",
        },

        fpsLimit: 120,

        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
            },
          },

          color: {
            value: "#00f5ff",
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: { min: 1, max: 4 },
          },

          links: {
            enable: true,
            distance: 150,
            color: "#00f5ff",
            opacity: 0.3,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },

            resize: true,
          },

          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 1,
              },
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default Particle;