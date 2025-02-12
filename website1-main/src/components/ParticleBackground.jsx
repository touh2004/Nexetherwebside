import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing particles...");
    await loadSlim(engine);
  }, []);

  return (
    <div
      style={{
        position: "fixed", // Ensures it covers the viewport and does not scroll
        top: 0,
        right: 0,
        width: "100vw", // Ensures it fits exactly to the viewport width
        height: "100vh", // Ensures it fits exactly to the viewport height
        zIndex: -1, // Keeps it in the background
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 500 } },
            color: { value: "#ffc107" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 2, random: true },
            move: { enable: true, speed: 2 },
            line_linked: { enable: true, distance: 150, color: "#ffc107" },
          },
          interactivity: {
            events: { onhover: { enable: false, mode: "repulse" } },
            modes: { repulse: { distance: 200 } },
          },
        }}
      />
    </div>
  );
};

export default ParticleBackground;
