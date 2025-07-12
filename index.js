document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loading");
  document.documentElement.classList.add("loading");

  const titles = [
    "Graphics Designer",
    "Digital Editor",
    "Game Developer",
    "Game Tester",
    "Data Analyst",
    "Graphic Editor",
  ];

  const nameVariants = [
    "John Louie Ubias",
    "John Louie",
    "Louie",
    "Luwi",
    "SenpaiLuwi",
    "LuwAA",
  ];

  const nameElement = document.getElementById("name-title");
  const titleElement = document.getElementById("animated-title");

  // Set base font sizes
  nameElement.style.fontSize = "4rem";
  titleElement.style.fontSize = "1.5rem";

  // Glitchy typewriter effect for NAME
  function typeWriterGlitch(text, element, speed = 60, prefix = "") {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-<>~|";
    let displayText = Array(text.length).fill("");
    let progress = 0;

    const interval = setInterval(() => {
      for (let i = 0; i < text.length; i++) {
        if (i < progress) {
          displayText[i] = text[i];
        } else {
          displayText[i] = chars[Math.floor(Math.random() * chars.length)];
        }
      }

      element.textContent = prefix + displayText.join("");

      if (progress <= text.length) {
        progress++;
      } else {
        clearInterval(interval);
      }
    }, speed);
  }

  // Slide up transition for TITLE
  function cycleTitleSlideUp(newTitle) {
    titleElement.classList.add("slide-up-out");
    setTimeout(() => {
      titleElement.textContent = newTitle;
      titleElement.classList.remove("slide-up-out");
      titleElement.classList.add("slide-up-in");

      // Cleanup after animation
      setTimeout(() => {
        titleElement.classList.remove("slide-up-in");
      }, 400);
    }, 300);
  }

  // Main cycle
  function updateNameAndTitle() {
    const randomName = nameVariants[Math.floor(Math.random() * nameVariants.length)];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];

    typeWriterGlitch(randomName, nameElement, 50);
    cycleTitleSlideUp(randomTitle);
  }

  // Initial run
  updateNameAndTitle();

  // Repeat every 5 seconds
  setInterval(updateNameAndTitle, 5000);

  // Loader fade out and allow scrolling
  setTimeout(() => {
    const loader = document.querySelector(".loader-wrapper");
    loader.style.transition = "opacity 1s ease";
    loader.style.opacity = 0;

    setTimeout(() => {
      loader.style.display = "none";

      // Re-enable scrolling
      document.body.classList.remove("loading");
      document.documentElement.classList.remove("loading");
    }, 500);
  }, 2100);
});

// Section scroll highlight
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.glass-nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('.glass-nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};

// Smooth scroll on nav click
document.querySelectorAll('.glass-nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Prevent image dragging
document.querySelectorAll('.game-icon img, .editing-icon img, .programming-icon img').forEach(img => {
  img.addEventListener('dragstart', e => e.preventDefault());
});


window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.height = scrollPercent + '%';
});


// Particle background
new FinisherHeader({
  "count": 100,
  "size": {
    "min": 2,
    "max": 13,
    "pulse": 0.1
  },
  "speed": {
    "x": {
      "min": 0,
      "max": 1.5
    },
    "y": {
      "min": 0,
      "max": 1.5
    }
  },
  "colors": {
    "background": "#1a1a1a",
    "particles": [
      "#27391c",
      "#255f38",
      "#1f7d53",
      "#e2dfd0"
    ]
  },
  "blending": "none",
  "opacity": {
    "center": 1,
    "edge": 0
  },
  "skew": 0,
  "shapes": ["c"]
});
