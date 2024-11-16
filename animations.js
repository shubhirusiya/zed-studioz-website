const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const title = entry.target.querySelector('.shinobi-title');
      const description = entry.target.querySelector('.shinobi-description');
      
      // Set initial states for title and description text
      gsap.set([title, description], {
        opacity: 0,
        x: -50
      });

      // Create a timeline for sequenced animations
      const tl = gsap.timeline();

      // Title animation
      tl.to(title, {
        duration: 0.8,
        opacity: 1,
        x: 0,
        ease: 'power2.out'
      })
      // Description animation starts after title is in place
      .to(description, {
        duration: 0.8,
        opacity: 1,
        x: 0,
        ease: 'power2.out'
      }, "+=0.2"); // Small delay between title and description

      // Unobserve after animation is triggered
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% of the element is visible
});

// Start observing all banner sections when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Set initial state of all text elements to be invisible
  const titles = document.querySelectorAll('.shinobi-title');
  const descriptions = document.querySelectorAll('.shinobi-description');
  
  gsap.set([titles, descriptions], {
    opacity: 0,
    x: -50
  });

  // Start observing all banner sections
  const banners = document.querySelectorAll('.shinobi-banner');
  banners.forEach(banner => {
    observer.observe(banner);
  });
});


// JavaScript
const glitchText = document.querySelector('.glitch-text');

function glitchEffect() {
  glitchText.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  glitchText.style.opacity = Math.random() * 0.4 + 0.6;
  requestAnimationFrame(glitchEffect);
}

glitchEffect();

document.addEventListener("DOMContentLoaded", function() {
  console.log("Document loaded");
  if (typeof particlesJS !== 'undefined') {
      console.log("Particles.js is loaded");
  } else {
      console.log("Particles.js is not loaded");
  }
});
document.addEventListener("DOMContentLoaded", function() {
  particlesJS("particles-js", {
      particles: {
          number: {
              value: 80,
              density: {
                  enable: true,
                  value_area: 800
              }
          },
          color: {
              value: "#ffffff"
          },
          shape: {
              type: "circle"
          },
          opacity: {
              value: 0.5,
              random: false
          },
          size: {
              value: 3,
              random: true
          },
          line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
          },
          move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false
          }
      },
      interactivity: {
          detect_on: "canvas",
          events: {
              onhover: {
                  enable: true,
                  mode: "grab"
              },
              onclick: {
                  enable: true,
                  mode: "push"
              },
              resize: true
          }
      },
      retina_detect: true
  });
});



  // Initialize particles.js
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});

// Your existing animations code below...