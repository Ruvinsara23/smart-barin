import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Tsparticles = () => {
  const particlesInit = async (main) => {
   
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
     
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
       
        fpsLimit: 100,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "",
            },
            resize:true,
          },
          modes: {
            push: {
              quantity:80,
            },
            repulse: {
              distance: 200,
              duration: 15,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 110,
            enable: true,
            opacity: 0.4,
            width: 0.8,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "left to right",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: false,
              area:100,
            },
            value: 190,
          },
          opacity: {
            value: 0.1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max:5},
          },
        },
        detectRetina: false,
      }}
    />
  );
};

export default Tsparticles;